"use client";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/context";
import randomChoiceMessage from "../../../lib/choiceMessages";
import "../../../styles/globals.css";
import styles from "../../../styles/Home.module.css";
import Rules from "../../../components/Rules";
import FormAI from "../../../components/FormAI";
import { Button } from "@mui/material";

export default function Start() {
  const [randInt, setRandInt] = useState(0);
  const [nickname, setNickname] = useAppContext();

  // To avoid hydration error, I am using useEffect to create a random number for random message
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * randomChoiceMessage.length);
    setRandInt(randomNumber);
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <code
          style={{
            textAlign: "center",
          }}
        >
          {randomChoiceMessage[randInt]}
          <br />
          <h2>{nickname}</h2>
        </code>
        <Rules />
        <Button>FIGHT</Button>
        <FormAI />
        <NextLink href="/game">
          <button className={styles.buttonKeyboard}>Back</button>
        </NextLink>
      </main>
    </div>
  );
}
