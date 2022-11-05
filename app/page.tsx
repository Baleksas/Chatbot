"use client";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Loader from "../components/ModelLoader";
import Link from "next/link";
import React from "react";
const LazyVoxelModel = dynamic(() => import("../components/Model"), {
  ssr: false,
  loading: () => <Loader />,
});
// todo: make widths smaller, mobile-first
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>YOU VS 🤖</h1>
        <LazyVoxelModel />
        <code className={styles.code}>A game you can&apos;t refuse to try</code>
        <Link className={styles.buttonKeyboard} href="/game">
          Play
        </Link>
      </main>
    </div>
  );
}
