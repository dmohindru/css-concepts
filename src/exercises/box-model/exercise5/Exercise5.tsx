import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise5.module.css";

const Exercise5: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Margin"
        content="Place two vertically stacked elements without any styling. Observe the 'margin collapse' effect by adding equal top and bottom margins to these elements and then adding unequal values to see the impact on spacing."
      />
      <div className={styles.parent}>
        <div className={`${styles.boxStyle} ${styles.first}`}></div>
        <div className={`${styles.boxStyle} ${styles.second}`}></div>
      </div>
    </div>
  );
};

export default Exercise5;
