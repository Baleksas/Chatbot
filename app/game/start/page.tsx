"use client";
import NextLink from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useAppContext } from "../../../context/context";
import "../../../styles/globals.css";
import styles from "../../../styles/Home.module.css";
import Rules from "../../../components/Rules";
import FormAI from "../../../components/FormAI";
import { Button, Typography, Box } from "@mui/material";
import Greeting from "../../../components/Greeting";
import TimedComponent from "../../../components/TimedComponent";
import FightChat from "../../../components/FightChat";
import Form from "../../../components/Form";

export default function Start() {
  const [agree, setAgree] = useState(false);
  const [[nickname, setNickname], [storyMode, setStoryMode]] = useAppContext();

  return (
    <main className={styles.main}>
      {!agree && storyMode ? (
        <>
          <Greeting />
          <Rules nickname={nickname} />
          <button
            onClick={() => setAgree(true)}
            className={`${styles.buttonKeyboard} ${styles.buttonFight}`}
          >
            Start
          </button>
        </>
      ) : (
        <Fragment>
          <Form />
        </Fragment>
      )}
    </main>
  );
}
