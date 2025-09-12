import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise16.module.css";

const Exercise16: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Overflow and Scroll Bars"
        content="Create a container with a fixed height and width. Place content inside that exceeds the container's dimensions. Use the overflow property (visible, hidden, scroll, auto) to observe how overflow behavior changes."
      />
      <div className={styles.parent}>
        <div className={styles.child}>
          <div className={styles.grandChild}></div>
          <div className={styles.grandChild}></div>
          <div className={styles.grandChild}></div>
        </div>
      </div>
    </div>
  );
};

export default Exercise16;
