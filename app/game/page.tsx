"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AvatarsSelection from "../../components/AvatarsSelection";
import ToolTip from "../../components/ToolTip";
import styles from "../../styles/Home.module.css";
import Stage from "./stage";
import Start from "./start/page";

export default function Game() {
  const [avatarSelected, setAvatarSelected] = useState("");

  return (
    <div className={styles.container}>
      <Stage
        avatarSelected={avatarSelected}
        setAvatarSelected={setAvatarSelected}
      />
    </div>
  );
}
