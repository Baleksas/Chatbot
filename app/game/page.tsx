"use client";
import NextLink from "next/link";

import React from "react";
import AvatarsSelection from "../../components/AvatarsSelection";
import ToolTip from "../../components/ToolTip";
import styles from "../../styles/Home.module.css";
import { useState, useContext } from "react";
import { useAppContext } from "../../context/context";

export default function Game() {
  const [nickname, setNickname] = useAppContext();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <code className={styles.code}>Told you! 🥸</code>
        <code className={styles.code}>
          <ToolTip title="Now, choose your avatar">
            You can use{" "}
            <button
              className={`${styles.buttonKeyboard} ${styles.tooltipBtn}`}
              role="button"
            >
              Tab
            </button>{" "}
            ,
            <button
              className={`${styles.buttonKeyboard} ${styles.tooltipBtn}`}
              role="button"
            >
              Shift
            </button>{" "}
            +
            <button
              className={`${styles.buttonKeyboard} ${styles.tooltipBtn}`}
              role="button"
            >
              Tab
            </button>{" "}
            and{" "}
            <button
              className={`${styles.buttonKeyboard} ${styles.tooltipBtn}`}
              role="button"
            >
              Space
            </button>{" "}
            to navigate in a more special way!
          </ToolTip>
        </code>
        <AvatarsSelection setAvatarSelected={setNickname} />
        {nickname && (
          <code
            style={{
              fontSize: "35px",
            }}
          >
            {nickname}
            <NextLink href="/game/start" className={styles.buttonKeyboard}>
              Next
            </NextLink>
          </code>
        )}
        <NextLink href="/">
          <button className={styles.buttonKeyboard}>Back</button>
        </NextLink>
      </main>
    </div>
  );
}
