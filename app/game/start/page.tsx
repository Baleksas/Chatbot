"use client";
import styles from "../../../styles/Home.module.css";
import dynamic from "next/dynamic";
import Loader, { ModelSpinner } from "../../../components/ModelLoader";
import Link from "next/link";
import React from "react";

const LazyModel = dynamic(() => import("../../../components/ModelRobot"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function start({}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>Start page</main>
    </div>
  );
}
