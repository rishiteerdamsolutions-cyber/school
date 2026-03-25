import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

const allowedStatus = new Set(["new", "contacted", "qualified"]);
const allowedFollowUp = new Set(["pending", "sent", "failed", "skipped"]);

export async function PATCH(
  req: Request,
  ctx: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await ctx.params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const body = (await req.json().catch(() => ({}))) as Record<
      string,
      unknown
    >;

    const $set: Record<string, unknown> = { updatedAt: new Date() };

    if (typeof body.status === "string") {
      if (!allowedStatus.has(body.status)) {
        return NextResponse.json({ error: "Invalid status" }, { status: 400 });
      }
      $set.status = body.status;
    }

    if (typeof body.notes === "string") {
      $set.notes = body.notes.slice(0, 4000);
    }

    if (typeof body.followUpStatus === "string") {
      if (!allowedFollowUp.has(body.followUpStatus)) {
        return NextResponse.json(
          { error: "Invalid followUpStatus" },
          { status: 400 },
        );
      }
      $set.followUpStatus = body.followUpStatus;
    }

    if (Object.keys($set).length <= 1) {
      return NextResponse.json(
        { error: "No valid fields to update" },
        { status: 400 },
      );
    }

    const db = await getDb();
    const result = await db.collection("leads").updateOne(
      { _id: new ObjectId(id) },
      { $set },
    );

    if (!result.matchedCount) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead PATCH failed", error);
    return NextResponse.json(
      { error: "Unable to update lead" },
      { status: 500 },
    );
  }
}
