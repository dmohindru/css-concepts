import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise13.module.css";

const Exercise13: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Box Sizing"
        content="Create a responsive layout with a few boxes of different widths. Set box-sizing: border-box on all boxes to prevent overflow issues when padding and borders are added."
      />
      <div className={styles.parent}>
        <div className={`${styles.boxStyle} ${styles.first}`}></div>
        <div className={`${styles.boxStyle} ${styles.second}`}></div>
        <div className={`${styles.boxStyle} ${styles.third}`}></div>
      </div>
    </div>
  );
};

export default Exercise13;
