"use client";

import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Loader, { ModelSpinner } from "../../../components/ModelLoader";
import Link from "next/link";
import React from "react";

// async function getData() {
//   const res = await fetch("https://api.github.com/users/Baleksas/repos");
//   return res.json();
// }

const LazyModel = dynamic(() => import("../../../components/ModelRobot"), {
  ssr: false,
  loading: () => <Loader />,
});
export default function start() {
  return (
    <div>
      START PAGE
      <LazyModel model="/help.glb" />
    </div>
  );
}
