"use client";
import styles from "../styles/Home.module.css";
import { Inter } from "@next/font/google";
import dynamic from "next/dynamic";
import Loader from "../components/ModelLoader";
import Link from "next/link";
const LazyVoxelModel = dynamic(() => import("../components/Model"), {
  ssr: false,
  loading: () => <Loader />,
});

const inter = Inter();
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={inter.className}>YOU VS AI</h1>
        <LazyVoxelModel />
        <code className={styles.code}>A game you can't refuse to try</code>
        <Link className={styles.buttonKeyboard} href="/game">
          Play
        </Link>
      </main>
    </div>
  );
}
