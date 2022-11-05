import React from "react";
import styles from "../styles/Home.module.css";

const ModelContainer = ({ children }: any) => {
  return <div className={styles.modelContainer}>{children}</div>;
};

export default ModelContainer;
