import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise12.module.css";

const Exercise12: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Box Sizing"
        content="Create two boxes with identical width, height, padding, and border values. Set box-sizing: content-box for one and box-sizing: border-box for the other. Observe how each box's total size differs based on the box-sizing value."
      />
      <div className={styles.parent}>
        <div className={`${styles.boxStyle} ${styles.first}`}></div>
        <div className={`${styles.boxStyle} ${styles.second}`}></div>
      </div>
    </div>
  );
};

export default Exercise12;
