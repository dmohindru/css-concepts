import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise4.module.css";

const Exercise4: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Margin"
        content="Create two horizontally aligned boxes. Apply a large left margin to one of them and see how it affects their positioning. Experiment with auto values on margins to center-align elements within their container."
      />
      <div className={styles.parent}>
        <div className={`${styles.boxStyle} ${styles.first}`}></div>
        <div className={`${styles.boxStyle} ${styles.second}`}></div>
      </div>
    </div>
  );
};

export default Exercise4;
