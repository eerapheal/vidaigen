import { NextResponse } from "next/server";
import { chatSession } from "../../../../config/AiModels";

const SCRIPT_PROMPT = `
write a two different script for 30 seconds video on Topic: {topic}
do not add Scene description
Do not add anything in Braces, just return the plain story in text
Give me a response in JSON format and follow the schema
{scripts: [
{
content: ""
}
],
},`;

export async function POST(req) {
  try {
    const { topic } = await req.json();
    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });
    }

    const PROMPT = SCRIPT_PROMPT.replace("{topic}", topic);

    // Send the prompt to the chat session
    const result = await chatSession.sendMessage(PROMPT);
    const resp = result?.response?.text();

    // Parse the response and return it
    try {
      const parsedResponse = JSON.parse(resp);
      return NextResponse.json(parsedResponse);
    } catch (error) {
      console.error("Error parsing JSON response:", error);
      return NextResponse.json(
        { error: "Invalid JSON response" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error generating script:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
