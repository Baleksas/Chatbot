import { InitialState } from "@/context/context";
import { OpenAIStream, OpenAIStreamPayload } from "../../utils/OpenAIStream";

type RequestData = {
  currentModel: string;
  message: string;
  nickname: string;
  storyMode: string;
};

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

//FIXME: might be an issue of deployment
export const runtime = "edge";

export default async function handler(request: Request) {
  const { currentModel, message, nickname, storyMode } =
    (await request.json()) as RequestData;

  if (!message) {
    return new Response("No message in the request", { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    // model: `${currentModel}`,
    messages: storyMode
      ? [
          {
            role: "system",
            content: `Nickaname of the user is: ${nickname}. Greet user by his nickanem and talk in an adventurous speech.`,
          },
          { role: "user", content: message },
        ]
      : [{ role: "user", content: message }],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 2048,
    stream: true,
    n: 1,
  };
  console.log(payload);
  const stream = await OpenAIStream(payload);
  return new Response(stream);
}
