import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();

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
      createdAt: new Date(),
    };

    if (!payload.parentName || !payload.phone) {
      return NextResponse.json(
        { error: "Parent name and phone are required" },
        { status: 400 },
      );
    }

    const db = await getDb();
    const result = await db.collection("leads").insertOne(payload);

    return NextResponse.json({ ok: true, id: result.insertedId.toString() });
  } catch (error) {
    console.error("Lead save failed", error);
    return NextResponse.json(
      { error: "Unable to save lead at the moment" },
      { status: 500 },
    );
  }
}
