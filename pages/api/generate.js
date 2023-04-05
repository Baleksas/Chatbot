import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const firstArg = req.body.firstArg || "";
  const secondArg = req.body.secondArg || "";

  if (secondArg.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid secondArg",
      },
    });
    return;
  }
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: generatePrompt({ firstArg, secondArg }),
      max_tokens: 100,
    });
    console.log(completion.data);
    res
      .status(200)
      .json({ result: completion.data.choices[0].message.content });
  } catch (error) {
    console.log(error);
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.log(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

function generatePrompt(data) {
  const { firstArg, secondArg } = data;
  return [
    {
      role: "system",
      content: `You have to ask one question about nature. Difficulty level: ${firstArg}`,
    },
    {
      role: "user",
      content: `${secondArg}`,
    },
  ];
}
