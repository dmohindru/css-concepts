import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise9.module.css";

const Exercise9: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Border"
        content="Create a div and apply a solid border with a specified width, color, and style (solid, dashed, dotted, double, etc.). Experiment with different border-width and border-style values to observe the visual differences."
      />
      <div className={styles.parent}>
        <div className={`${styles.boxSize} ${styles.first}`}></div>
        <div className={`${styles.boxSize} ${styles.second}`}></div>
        <div className={`${styles.boxSize} ${styles.third}`}></div>
      </div>
    </div>
  );
};

export default Exercise9;
