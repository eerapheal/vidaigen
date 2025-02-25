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
        {text: "write a two different script for 30 seconds video on Topic: kids Story.\n\ndo not add Scene description\nDo not add anthing in Braces, just return the plain story in text\nGive me a response in JSON format and follow the schema\n\n-{scripts: [\n{\ncontent: \"\"\n}\n],\n},\n"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"Once upon a time, lived a tiny little snail named Shelly. Shelly dreamed of seeing the world, but she was so slow! One sunny morning, a big friendly ladybug offered Shelly a ride. Zoom! Together, they soared over fields of flowers, all the way to the sparkling sea. Shelly giggled, 'The world is amazing!' And she learned that even small snails can have big adventures with a little help from friends.\"\n    },\n    {\n      \"content\": \"Leo the Lion was scared of the dark! Every night, he hid under his bed. Then, one night, a tiny firefly blinked outside his window. 'Hello?' Leo whispered. The firefly winked again and flew into Leo's room, lighting it with a soft glow. Leo smiled. 'You're not scary at all!' From that day on, Leo and the firefly were best friends, and Leo wasn't afraid of the dark anymore. A little light can chase away any fear.\"\n    }\n  ]\n}\n```"},
      ],
    },
  ],
});

export { chatSession };