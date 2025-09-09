import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise15.module.css";

const Exercise15: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Margin Auto for Centering"
        content="Try to center a box both vertically and horizontally within its container using margin: auto. Use height on the container and display: flex to center it vertically."
      />
      <div className={styles.parent}>
        <div className={styles.child}>
          <div className={styles.grandChild}></div>
        </div>
      </div>
    </div>
  );
};

export default Exercise15;
