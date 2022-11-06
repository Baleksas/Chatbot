import React from "react";
import styles from "../styles/Home.module.css";

const ToolTip = ({ children }: any) => {
  return (
    <div className={styles.hoverText}>
      <span className={styles.tooltipText} id={styles.top}>
        You can use{" "}
        <button
          className={`${styles.buttonKeyboard} ${styles.tooltipBtn}`}
          role="button"
        >
          Tab
        </button>{" "}
        ,
        <button
          className={`${styles.buttonKeyboard} ${styles.tooltipBtn}`}
          role="button"
        >
          Shift
        </button>{" "}
        +
        <button
          className={`${styles.buttonKeyboard} ${styles.tooltipBtn}`}
          role="button"
        >
          Tab
        </button>{" "}
        and{" "}
        <button
          className={`${styles.buttonKeyboard} ${styles.tooltipBtn}`}
          role="button"
        >
          Space
        </button>{" "}
        to navigate in a more special way!
      </span>
      {children}
    </div>
  );
};

export default ToolTip;
