import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Inter } from "@next/font/google";

const inter = Inter();
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>YOU VS AI</title>
        <meta name="description" content="YOU VS AI - GAME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={inter.className}>YOU VS AI</h1>

        <code className={styles.code}>A game you can't refuse to try</code>

        <button className={styles.buttonKeyboard} role="button">
          Play
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://aleksas.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by
          <span className={styles.logo}>
            <Image src="/logo.png" alt="Alex logo" width={60} height={30} />
          </span>
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
