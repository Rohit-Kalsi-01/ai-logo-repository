

import { NextResponse } from "next/server";
import { generateLogoPrompt } from "@/configs/AiModel";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const result = await generateLogoPrompt(prompt);

    

    return NextResponse.json(result);

  } catch (error) {
    console.error("AI LOGO ERROR:", error);
    return NextResponse.json(
      { error: "Failed to generate logo prompt" },
      { status: 500 }
    );
  }
}
