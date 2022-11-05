"use client";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Inter } from "@next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import Loader from "../components/ModelLoader";
import ModelContainer from "../components/ModelContainer";
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
        <ModelContainer>
          <LazyVoxelModel />
        </ModelContainer>
        <code className={styles.code}>A game you can't refuse to try</code>
        <button className={styles.buttonKeyboard} role="button">
          Play
        </button>
      </main>
    </div>
  );
}
