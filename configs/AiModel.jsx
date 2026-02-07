import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const aii = new GoogleGenAI({
  apiKey: process.env.LOGO_API_KEY,
});




export async function LogoIdea(userPrompt) {
  const response = await aii.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      {
        role: "user",
        parts: [{ text: userPrompt }],
      },
    ],
  });

  const text = response.text;

  try {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return { prompt: text };
    return JSON.parse(match[0]);
  } catch {
    return { prompt: text };
  }
}

export async function generateLogoPrompt(userPrompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      {
        role: "user",
        parts: [{ text: userPrompt }],
      },
    ],
  });

  const text = response.text;

  try {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return { prompt: text };
    return JSON.parse(match[0]);
  } catch {
    return { prompt: text };
  }
}
