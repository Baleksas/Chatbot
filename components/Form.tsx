"use client";
import { useRef, useState } from "react";
import useSWR from "swr";
import styles from "../styles/Home.module.css";
import formStyles from "../styles/Form.module.css";

import {
  Box,
  CircularProgress,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useAppContext, InitialState } from "../context/context";
import NextLink from "next/link";
import { Typography } from "@mui/material";

interface ModelType {
  object: "engine";
  id: string;
  ready: boolean;
  owner: string;
  permissions: null;
  created: string;
}

const Form = () => {
  const messageInput = useRef<HTMLTextAreaElement | null>(null);
  const [response, setResponse] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [models, setModels] = useState<ModelType[]>([]);
  const [currentModel, setCurrentModel] = useState<string>("gpt-3.5-turbo");
  const [[nickname, setNickname], [storyMode, setStoryMode]] = useAppContext();
  console.log(nickname);
  console.log(storyMode);

  const handleEnter = (
    e: React.KeyboardEvent<HTMLTextAreaElement> &
      React.FormEvent<HTMLFormElement>
  ) => {
    if (e.key === "Enter" && isLoading === false) {
      e.preventDefault();
      setIsLoading(true);
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = messageInput.current?.value;
    if (message !== undefined) {
      setResponse((prev) => [...prev, message]);
      messageInput.current!.value = "";
    }

    if (!message) {
      return;
    }

    const response = await fetch("/api/response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        currentModel,
        nickname,
      }),
    });
    console.log("Edge function returned.");

    console.log(response);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    setResponse((prev) => [...prev, message]);

    let currentResponse: string[] = [];
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      // currentResponse = [...currentResponse, message, chunkValue];
      currentResponse = [...currentResponse, chunkValue];
      setResponse((prev) => [...prev.slice(0, -1), currentResponse.join("")]);
    }
    // breaks text indent on refresh due to streaming
    // localStorage.setItem('response', JSON.stringify(currentResponse));
    setIsLoading(false);
  };

  const handleReset = () => {
    localStorage.removeItem("response");
    setResponse([]);
  };

  useSWR("fetchingResponse", async () => {
    const storedResponse = localStorage.getItem("response");
    if (storedResponse) {
      setResponse(JSON.parse(storedResponse));
    }
  });

  const fetcher = async () => {
    const models = await (await fetch("/api/models")).json();
    setModels(models.data);
    const modelIndex = models.data.findIndex(
      (model: ModelType) => model.id === "gpt-3.5-turbo"
    );
    setCurrentModel(models.data[modelIndex].id);
    console.log(currentModel);
    return models;
  };

  useSWR("fetchingModels", fetcher);

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentModel(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
        justifyContent={"space-between"}
      >
        <NextLink href="/game/">
          <button className={`${styles.buttonKeyboard} `}>Back</button>
        </NextLink>
        <Box height={"max-content"} textAlign={"center"} margin={"auto"}>
          {storyMode ? (
            <>
              <Typography variant="h5" textAlign={"center"} margin={"auto"}>
                Story Mode
              </Typography>
              <Typography variant="body1" textAlign={"center"} margin={"auto"}>
                {nickname}
              </Typography>
            </>
          ) : (
            <Typography variant="h5" textAlign={"center"} margin={"auto"}>
              Experiemental mode
            </Typography>
          )}
        </Box>

        <button
          onClick={handleReset}
          type="reset"
          className={`${styles.buttonKeyboard} ${styles.clearHistory}`}
        >
          Clear History
        </button>
      </Box>

      <Box flex={1}>
        {isLoading ? (
          <CircularProgress />
        ) : response ? (
          response.map((item: string, index: number) => {
            return (
              <div
                key={index}
                className={`${
                  index % 2 === 0
                    ? formStyles.userChatbox
                    : formStyles.aiChatbox
                } ${formStyles.chatbox}`}
              >
                <p>{item}</p>
              </div>
            );
          })
        ) : // Error
        null}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Select value={currentModel} onChange={handleModelChange as any}>
          {models.map((model) => (
            <MenuItem key={model.id} value={model.id}>
              {model.id}
            </MenuItem>
          ))}
        </Select>
        <TextField
          name="Message"
          placeholder="Type your query"
          inputRef={messageInput}
          onKeyDown={handleEnter as any}
          multiline
        />

        <button
          disabled={isLoading}
          type="submit"
          onClick={handleSubmit as any}
          className={`${styles.buttonKeyboard} ${styles.buttonFight} `}
        >
          Shout !
        </button>
      </Box>
    </Box>
  );
};

export default Form;
