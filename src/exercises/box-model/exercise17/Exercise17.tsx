import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise17.module.css";

const Exercise17: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Overflow and Scroll Bars"
        content="Experiment with overflow-x and overflow-y by setting different scroll behaviors for horizontal and vertical overflow. Try adding padding to the container and observe the behavior."
      />
      <div className={styles.parent}>
        <div className={styles.childY}>
          <div className={styles.grandChild}></div>
          <div className={styles.grandChild}></div>
          <div className={styles.grandChild}></div>
        </div>
        <div className={styles.childX}>
          <div className={styles.grandChild}></div>
          <div className={styles.grandChild}></div>
          <div className={styles.grandChild}></div>
        </div>
      </div>
    </div>
  );
};

export default Exercise17;
