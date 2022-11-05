"use client";
import Link from "next/link";
import React from "react";
import AvatarsSelection from "../../components/AvatarsSelection";
import styles from "../../styles/Home.module.css";

export default function Game() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <code className={styles.code}>Told you! 🥸</code>
        <code className={styles.code}>Now, choose your avatar </code>
        <AvatarsSelection />
        <Link href="/">
          <button className={styles.buttonKeyboard} role="button">
            Back
          </button>
        </Link>
      </main>
    </div>
  );
}
