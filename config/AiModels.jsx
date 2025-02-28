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
        { text: "write a two different script for 30 seconds video on Topic: kids Story.\n\ndo not add Scene description\nDo not add anthing in Braces, just return the plain story in text\nGive me a response in JSON format and follow the schema\n\n-{scripts: [\n{\ncontent: \"\"\n}\n],\n},\n" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"Once upon a time, lived a tiny little snail named Shelly. Shelly dreamed of seeing the world, but she was so slow! One sunny morning, a big friendly ladybug offered Shelly a ride. Zoom! Together, they soared over fields of flowers, all the way to the sparkling sea. Shelly giggled, 'The world is amazing!' And she learned that even small snails can have big adventures with a little help from friends.\"\n    },\n    {\n      \"content\": \"Leo the Lion was scared of the dark! Every night, he hid under his bed. Then, one night, a tiny firefly blinked outside his window. 'Hello?' Leo whispered. The firefly winked again and flew into Leo's room, lighting it with a soft glow. Leo smiled. 'You're not scary at all!' From that day on, Leo and the firefly were best friends, and Leo wasn't afraid of the dark anymore. A little light can chase away any fear.\"\n    }\n  ]\n}\n```" },
      ],
    },
  ],
});
export const GenerateImageScript = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "generate image prompts in cinematic style with all the details for each scene in 30 seconds of video; script: Rose Park refused the civil rights movement. One person's bravery can inspire lasting change for everyone.\n\njust give specifying image prompt depending on the storyline do\n not give camera angle image prompt\n\nfollow the following schema and JSON data (4.5 images)\n[\n{\nimagePrompt: \"\",\nsceneContent'<Script Content>'\n}\n],\n},\n`" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "I am currently unable to generate images. The capability is only enabled for early testers. However, I can provide you with detailed image prompts in a cinematic style, based on your script, designed to evoke the specified emotions and story beats for each scene in your 30-second video.\n\nHere's the JSON data structure with image prompts and corresponding script content:\n\n```json\n[\n  {\n    \"imagePrompt\": \"EXT. BUS STOP - DAY. 1950s. Rose Park, a woman in her early 40s, sits wearily on a bus bench. Her face is etched with quiet determination, but there's a hint of fear in her eyes. Segregation signs are prominently displayed. The bus approaches, its exhaust fumes momentarily obscuring her.\",\n    \"sceneContent\": \"EXT. BUS STOP - DAY. ROSE sits on a bus bench, defeated.\"\n  },\n  {\n    \"imagePrompt\": \"INT. BUS - DAY. The bus is half-empty, with white passengers seated in the front and a few Black passengers in the back.  Rose sits near the middle, in the section designated for 'colored' people. A white man glares at her. The atmosphere is tense and uncomfortable.  Focus on Rose's clenched hands and averted gaze. Soft, diffused sunlight filters through the bus windows.\",\n    \"sceneContent\": \"INT. BUS - DAY. ROSE sits in the middle of the bus. A white man glares at her.\"\n  },\n  {\n    \"imagePrompt\": \"INT. BUS - DAY.  The bus driver, a stern-faced man in his 50s, addresses Rose. His expression is one of annoyance and authority. Other passengers look on with varying degrees of curiosity and hostility.  Rose remains seated, her back straight, her gaze firm and unwavering.  The tension in the bus is palpable.  Capture the subtle details of the era: clothing, hairstyles, bus interior.\",\n    \"sceneContent\": \"INT. BUS - DAY. The BUS DRIVER tells ROSE to move. She refuses.\"\n  },\n  {\n    \"imagePrompt\": \"INT. BUS - DAY. A policeman stands over Rose. He is stern and imposing. Rose is being arrested and pulled from her seat. The faces of the other passengers reflect shock, disbelief, and subtle approval. Rose's face is a mask of calm resolve, despite the fear she must be feeling.  Focus on the contrast between the policeman's power and Rose's quiet dignity.\",\n    \"sceneContent\": \"INT. BUS - DAY.  ROSE is arrested. Passengers watch in disbelief.\"\n  },\n  {\n    \"imagePrompt\": \"EXT. COURTHOUSE - DAY.  A crowd of people, Black and white, stand outside the courthouse, protesting. Signs read 'Equal Rights Now' and 'End Segregation'.  Rose Park is seen briefly, walking with determination towards the courthouse, surrounded by supporters. The atmosphere is charged with hope and defiance.  Focus on the energy and emotion of the crowd. Emphasize the visual contrast between the Black protestors and the white onlookers. Use a slightly wide angle to capture the scale of the demonstration.\",\n    \"sceneContent\": \"EXT. COURTHOUSE - DAY. ROSE is seen among a crowd of protestors.\"\n  }\n]\n```\n\nThis JSON provides a starting point for visualizing your 30-second video. Remember to adjust the details and camera angles to fit your specific vision and pacing. I hope this is helpful!\n" },
      ],
    },
  ],
});

export { chatSession };