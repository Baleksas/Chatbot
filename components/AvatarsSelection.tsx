import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import ToolTip from "./ToolTip";

const AvatarsSelection = ({ avatarSelected, setAvatarSelected }: any) => {
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
          <input
            style={{ fontSize: "23px" }}
            key={avatarName}
            onClick={(e) => {
              const target = e.target as HTMLInputElement;
              setAvatarSelected(target?.value);
            }}
            className={styles.buttonKeyboard}
            type="button"
            value={avatarName}
            id="myButton1"
          ></input>
        );
      })}
    </section>
  );
};

export default AvatarsSelection;
