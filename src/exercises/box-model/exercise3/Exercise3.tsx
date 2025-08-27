import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise3.module.css";

const Exercise3: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Margin"
        content="Create a series of div elements stacked vertically. Apply different margin values (positive and negative) to see how they affect spacing between elements. Use different margins for each side (top, right, bottom, left) to explore how each impacts positioning."
      />
      <div className={styles.parent}>
        <div className={`${styles.boxStyle} ${styles.first}`}></div>
        <div className={`${styles.boxStyle} ${styles.second}`}></div>
        <div className={`${styles.boxStyle} ${styles.third}`}></div>
      </div>
    </div>
  );
};

export default Exercise3;
