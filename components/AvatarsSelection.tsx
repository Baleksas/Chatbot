import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import ToolTip from "./ToolTip";

const AvatarsSelection = () => {
  const avatarsNames = [
    "🦖 rex",
    "🐥 mcduck",
    "🪳 joe",
    "🐳 whalester",
    "🐊 coco",
    "🐓 mcduck's cousin",
    "🦔 spikey",
  ];
  return (
    <section className={styles.section}>
      {avatarsNames.map((avatarName) => {
        return (
          <button
            style={{ fontSize: "23px" }}
            key={avatarName}
            className={styles.buttonKeyboard}
          >
            {avatarName}
          </button>
        );
      })}
    </section>
  );
};

export default AvatarsSelection;
