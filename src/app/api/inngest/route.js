// server.js (or api route)
"use server";
import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { helloWorld, GenerateVideoData } from "@/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    GenerateVideoData,
  ],
});
