"use client";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Loader, { ModelSpinner } from "../components/ModelLoader";
import NextLink from "next/link";
import React from "react";
import { Container } from "@mui/material";
const LazyModel = dynamic(() => import("../components/ModelRobot"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Chatbot</h1>
      <LazyModel model="/robot.gltf" />

      <NextLink className={styles.buttonKeyboard} href="/game">
        Play
      </NextLink>
    </main>
  );
}
