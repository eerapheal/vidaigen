import { GenerateImageScript } from "../../config/AiModels";
import { inngest } from "./client";
import axios from "axios";
import { api } from "../../convex/_generated/api";
const { ConvexHttpClient } = require("convex/browser");

const { createClient } = require("@deepgram/sdk");
const BASE_URL = "https://aigurulab.tech";

const ImagePromptScript = ` generate image prompts in cinematic style with all the details for each scene in 30 seconds of video; script: {script}

- Just give specifying image prompt depending on the storyline do
 - Not give camera angle image prompt

- Follow the following schema and JSON data (4.5 images)
[
{
imagePrompt: "",
sceneContent'<Script Content>'
}
],

`;
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
    const { script, topic, title, caption, videoStyle, voice, recordId } =
      event?.data;
    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL);
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
      console.error(result.data.audio);
      return result.data.audio;
    });

    // generate audio speech to text

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
          model: "nova-3",
        }
      );

      if (error) throw error;
      // STEP 4: Print the results

      return result.results?.channels[0]?.alternatives[0]?.words;
    });

    // generate prompts for image
    const GenerateImagePrompt = await step.run(
      "GenerateImagePrompt",
      async () => {
        const FINAL_PROMPT = ImagePromptScript.replace(
          "{style}",
          videoStyle
        ).replace("script", script);
        const result = await GenerateImageScript.sendMessage(FINAL_PROMPT);
        const resp = JSON.parse(result.response.text());
        return resp;
      }
    );
    //  generate image using A
    const GenerateImage = await step.run("generateImage", async () => {
      let images = [];
      images = await Promise.all(
        GenerateImagePrompt.map(async (element) => {
          const result = await axios.post(
            BASE_URL + "/api/generate-image",
            {
              width: 1024,
              height: 1024,
              input: element.imagePrompt,
              model: "sdxl", //'flux'
              aspectRatio: "1:1",
            },
            {
              headers: {
                "x-api-key": process.env.NEXT_PUBLIC_AIGURULAB_API_KEY,
                "Content-Type": "application/json",
              },
            }
          );
          console.error(result.data.image);
          return result.data.image;
        })
      );
      return images;
    });
    // save all data to database
    const UpdateVideoDataBD = await step.run("SaveVideoDataToBD", async () => {
      const result = await convex.mutation(api.videoData.UpdateVideoRecord, {
        recordId: recordId,
        audioUrl: GenerateAudioFile,
        images: GenerateImage,
        captionJson: GenerateCaption,
      });
      return result;
    });

    return "Executed Successfully";
  }
);
