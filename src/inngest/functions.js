import { inngest } from "./client";
import axios from "axios";

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
      const result = await axios.post(
        BASE_URL + "/api/text-to-speech",
        {
          input: script,
          voice: voice,
        },
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_AIGURULAB_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(result.data.audio);
      return result.data.audio;
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

    return GenerateAudioFile;
  }
);
