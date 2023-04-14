"use client";
import NextLink from "next/link";

import React from "react";
import AvatarsSelection from "../../components/AvatarsSelection";
import ToolTip from "../../components/ToolTip";
import styles from "../../styles/Home.module.css";
import { useState, useContext, useEffect } from "react";
import { useAppContext } from "../../context/context";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { InitialState } from "../../context/context";
import TimedComponent from "../../components/TimedComponent";
import CustomName from "@/components/CustomName";
export default function Game() {
  // const [nickname, setNickname] = useAppContext();
  // const [storyMode, setStoryMode] = useaP(false);
  const [[nickname, setNickname], [storyMode, setStoryMode]] = useAppContext();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <TimedComponent text="Make sure to try story mode!" />
        <FormControlLabel
          control={
            <Checkbox
              checked={storyMode}
              onChange={setStoryMode}
              defaultChecked
              color="info"
            />
          }
          label={
            <ToolTip title="Would you like to try story mode?">
              Story mode is character-oriented chatbot, which implements custom
              prompts and gamified interactions.
            </ToolTip>
          }
        />
        {storyMode && (
          <>
            <AvatarsSelection setAvatarSelected={setNickname} />
          </>
        )}
        <code
          style={{
            fontSize: "35px",
          }}
        >
          {storyMode ? <CustomName /> : null}
        </code>
        <NextLink href="/game/start" className={styles.buttonKeyboard}>
          <b> {storyMode ? "Explore 🐙" : "Experiment 🤖"}</b>
        </NextLink>
        <NextLink href="/">
          <button className={styles.buttonKeyboard}>Back</button>
        </NextLink>
      </main>
    </div>
  );
}
