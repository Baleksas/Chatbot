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

export default function Start() {
  const [randInt, setRandInt] = useState(0);
  const [agree, setAgree] = useState(false);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!agree ? (
          <>
            <Greeting />
            <Rules />
            <button
              onClick={() => setAgree(true)}
              className={`${styles.buttonKeyboard} ${styles.buttonFight}`}
            >
              FIGHT ⚔️
            </button>
          </>
        ) : (
          <Fragment>
            <FormAI />
          </Fragment>
        )}
        {!agree ? (
          <NextLink href="/game">
            <button className={styles.buttonKeyboard}>Back</button>
          </NextLink>
        ) : (
          <TimedComponent />
        )}
      </main>
    </div>
  );
}
