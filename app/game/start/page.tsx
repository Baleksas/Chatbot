"use client";
import { Fragment, useState } from "react";
import Form from "../../../components/Form";
import Greeting from "../../../components/Greeting";
import Rules from "../../../components/Rules";
import { useAppContext } from "../../../context/context";
import styles from "../../../styles/Home.module.css";
import "../../../styles/globals.css";

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
