import { inngest } from "./client";
import axios from "axios";
const { createClient } = require("@deepgram/sdk");
const BASE_URL = "https://aigurulab.tech";

export const helloWorld = inngest.createFunction(
  { id: "hello-customer" },
  { event: "test/hello.customer" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.name}!` };
  }
);

export const GenerateVideoData = inngest.createFunction(
  { id: "generate-video-data" },
  { event: "generate-video-data" },

  async ({ event, step }) => {
    const { script, topic, title, caption, videoStyle, voice } = event?.data;

    // generate mp3 file
    const GenerateAudioFile = await step.run("GenerateAudioFile", async () => {
      // const result = await axios.post(
      //   BASE_URL + "/api/text-to-speech",
      //   {
      //     input: script,
      //     voice: voice,
      //   },
      //   {
      //     headers: {
      //       "x-api-key": process.env.NEXT_PUBLIC_AIGURULAB_API_KEY,
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      // console.log(result.data.audio);
      return "https://firebasestorage.googleapis.com/v0/b/projects-2025-71366.firebasestorage.app/o/audio%2F1740764351638.mp3?alt=media&token=59102e81-b52e-48ca-9878-fef6be355d65";
    });
    // generate audio sheep to text
    const GenerateCaption = await step.run("GenerateCaption", async () => {
      // STEP 1: Create a Deepgram client using the API key
      const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY);
      // STEP 2: Call the transcribeUrl method with the audio payload and options
      const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
        {
          url: GenerateAudioFile,
        },
        // STEP 3: Configure Deepgram options for audio analysis
        {
          model: "nova-3"
        }
      );

      if (error) throw error;
  // STEP 4: Print the results

      return result.results?.channels[0]?.alternatives[0]?.words;
    });

    // generate prompts for image
    // const GenerateImagePrompt = await step.run(
    //   "GenerateImagePrompt",
    //   async () => {
    //     return result.data.audio;
    //   }
    // );
    //  generate image using AI

    // save all data to database

    return GenerateCaption;
  }
);
