import { NextResponse } from "next/server";
import { inngest } from "@/inngest/client";

export async function POST(req) {
  const formData = await req.json();

  try {
    const result = await inngest.send({
      name: "generate-video-data",
      data: {
        ...formData
      }
    });

    return NextResponse.json({ result: result});
  } catch (error) {
    console.error("Error in POST /api/inngest/generate-video-data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}