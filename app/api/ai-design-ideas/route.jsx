

import { NextResponse } from "next/server";
import {  LogoIdea } from "@/configs/AiModel";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const result = await LogoIdea(prompt);

    

    return NextResponse.json(result);

  } catch (error) {
    console.error("AI LOGO ERROR:", error);
    return NextResponse.json(
      { error: "Failed to generate logo prompt" },
      { status: 500 }
    );
  }
}
