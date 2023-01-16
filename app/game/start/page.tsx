"use client";
import styles from "../../../styles/Home.module.css";
import dynamic from "next/dynamic";
import Loader, { ModelSpinner } from "../../../components/ModelLoader";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const LazyModel = dynamic(() => import("../../../components/ModelRobot"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function start({}) {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setAnimalInput("");
    } catch (error: any) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3>Name my pet</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
