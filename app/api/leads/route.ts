import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { getWhatsAppSendConfig, sendLeadFollowUpTemplate } from "@/lib/whatsapp";
import type { ThemeId } from "@/themes";
import { THEMES } from "@/themes";

function parseThemeId(v: unknown): ThemeId {
  const s = String(v || "").trim();
  if ((THEMES as readonly string[]).includes(s)) return s as ThemeId;
  return "trust";
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const themeId = searchParams.get("themeId");
    const status = searchParams.get("status");
    const limit = Math.min(
      Number(searchParams.get("limit") || "200") || 200,
      500,
    );

    const filter: Record<string, string> = {};
    if (themeId && (THEMES as readonly string[]).includes(themeId)) {
      filter.themeId = themeId;
    }
    if (status) filter.status = status;

    const db = await getDb();
    const leads = await db
      .collection("leads")
      .find(Object.keys(filter).length ? filter : {})
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray();

    const serialized = leads.map((doc) => ({
      id: doc._id.toString(),
      parentName: doc.parentName,
      phone: doc.phone,
      email: doc.email,
      grade: doc.grade,
      message: doc.message,
      utmSource: doc.utmSource,
      utmMedium: doc.utmMedium,
      utmCampaign: doc.utmCampaign,
      utmContent: doc.utmContent,
      referrer: doc.referrer,
      themeId: doc.themeId ?? "trust",
      status: doc.status ?? "new",
      notes: doc.notes ?? "",
      followUpStatus: doc.followUpStatus ?? null,
      followUpSentAt: doc.followUpSentAt
        ? new Date(doc.followUpSentAt).toISOString()
        : null,
      followUpError: doc.followUpError ?? null,
      createdAt: doc.createdAt
        ? new Date(doc.createdAt).toISOString()
        : null,
    }));

    return NextResponse.json({ ok: true, leads: serialized });
  } catch (error) {
    console.error("Lead list failed", error);
    return NextResponse.json(
      { error: "Unable to list leads" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const themeId = parseThemeId(body.themeId);

    const payload = {
      parentName: String(body.parentName || "").trim(),
      phone: String(body.phone || "").trim(),
      email: String(body.email || "").trim(),
      grade: String(body.grade || "").trim(),
      message: String(body.message || "").trim(),
      utmSource: String(body.utmSource || "").trim(),
      utmMedium: String(body.utmMedium || "").trim(),
      utmCampaign: String(body.utmCampaign || "").trim(),
      utmContent: String(body.utmContent || "").trim(),
      referrer: String(body.referrer || "").trim(),
      themeId,
      status: "new" as const,
      notes: "",
      createdAt: new Date(),
    };

    if (!payload.parentName || !payload.phone) {
      return NextResponse.json(
        { error: "Parent name and phone are required" },
        { status: 400 },
      );
    }

    if (themeId === "smart") {
      Object.assign(payload, { followUpStatus: "pending" as const });
    }

    const db = await getDb();
    const result = await db.collection("leads").insertOne(payload);
    const insertedId = result.insertedId;

    if (themeId === "smart") {
      const digits = payload.phone.replace(/\D/g, "");
      const cfg = getWhatsAppSendConfig();

      if (digits.length < 8) {
        await db.collection("leads").updateOne(
          { _id: insertedId },
          {
            $set: {
              followUpStatus: "skipped",
              followUpError:
                "Phone has too few digits for WhatsApp; fix number to retry.",
            },
          },
        );
      } else if (!cfg) {
        /* follow-up stays pending until WHATSAPP_* env is set */
      } else {
        const send = await sendLeadFollowUpTemplate(digits, {
          phone: payload.phone,
          parentName: payload.parentName,
          grade: payload.grade,
          message: payload.message,
        });

        await db.collection("leads").updateOne(
          { _id: insertedId },
          {
            $set: {
              followUpStatus: send.ok ? "sent" : "failed",
              followUpSentAt: new Date(),
              ...(send.ok ? {} : { followUpError: send.error }),
            },
          },
        );
      }
    }

    return NextResponse.json({ ok: true, id: insertedId.toString() });
  } catch (error) {
    console.error("Lead save failed", error);
    return NextResponse.json(
      { error: "Unable to save lead at the moment" },
      { status: 500 },
    );
  }
}
