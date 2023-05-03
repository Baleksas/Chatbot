"use client";
import CustomName from "@/components/CustomName";
import { Checkbox, FormControlLabel } from "@mui/material";
import NextLink from "next/link";
import AvatarsSelection from "../../components/AvatarsSelection";
import TimedComponent from "../../components/TimedComponent";
import ToolTip from "../../components/ToolTip";
import { useAppContext } from "../../context/context";
import styles from "../../styles/Home.module.css";
export default function Game() {
  const [[nickname, setNickname], [storyMode, setStoryMode]] = useAppContext();

  return (
    <main className={styles.main}>
      <TimedComponent text="Make sure to try story mode!" />
      <FormControlLabel
        control={
          <Checkbox checked={storyMode} onChange={setStoryMode} color="info" />
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
  );
}
