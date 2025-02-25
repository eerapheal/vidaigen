const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

// Create a chat session
const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "const SCRIPT_PROMPT = `\nwrite a two deferent script for 30 seconds video using this topic: Revolution of AI\n\ndo not add Scene description\n\nGive me a response in JSON format and follow the schema\n\n-{scripts: [\n{\ncontent: \"\"\n}\n],\n},\n`" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"**(Upbeat, futuristic music starts)**\\n**(Voiceover, energetic):** AI. It's not just sci-fi anymore. It's revolutionizing everything!\\n**(Quick cuts of AI in action: medical diagnosis, self-driving cars, art generation)**\\n**(Voiceover):** From healthcare to transportation to creativity, AI is making the impossible, possible.\\n**(Text on screen: The AI Revolution: Here and Now)**\\n**(Voiceover):** Are you ready for the future?\\n**(Company logo or brand with tagline. Music fades.)**\"\n    },\n    {\n      \"content\": \"**(Start with a question mark graphic flickering on screen. Then transition to complex algorithms visualizing on the screen. Music: Curious, questioning.)**\\n**(Voiceover, thoughtful):** What if we could solve the world's biggest problems...faster?\\n**(Show brief examples of problems AI could solve: climate change, poverty, disease.)**\\n**(Voiceover):** AI is offering new solutions, new perspectives, a whole new way of thinking.\\n**(Show a human and a robot hand coming together.)**\\n**(Voiceover):** It's not about replacing us, it's about empowering us.\\n**(Text on screen: AI: Solving Tomorrow's Problems, Today.)**\\n**(Music swells. Company logo or brand with a call to action. Music fades.)**\"\n    }\n  ]\n}\n```" },
      ],
    },
  ],
});

export { chatSession };