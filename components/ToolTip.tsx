import React from "react";
import styles from "../styles/Home.module.css";

const ToolTip = ({ children, title }: any) => {
  return (
    <React.Fragment>
      <div className={styles.hoverText}>
        {title}
        <span className={`${styles.tooltipText} ${styles.top}`}>
          {children}
        </span>
      </div>
    </React.Fragment>
  );
};

export default ToolTip;
