import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-customer" },
  { event: "test/hello.customer" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.name}!` };
  },
);