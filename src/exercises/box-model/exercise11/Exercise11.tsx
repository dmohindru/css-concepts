import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise11.module.css";

const Exercise11: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Border"
        content="Experiment with the border-radius property to make rounded corners. Try setting border-radius values in different units (px, %, etc.) and on individual corners (e.g., border-top-left-radius)."
      />
      <div className={styles.parent}>
        <div className={`${styles.boxSize} ${styles.first}`}></div>
        <div className={`${styles.boxSize} ${styles.second}`}></div>
        <div className={`${styles.boxSize} ${styles.third}`}></div>
      </div>
    </div>
  );
};

export default Exercise11;
