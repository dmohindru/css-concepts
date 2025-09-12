import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise14.module.css";

const Exercise14: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Margin Auto for Centering"
        content="Create a container div and place a child div inside it. Use margin: auto to horizontally center the child within the container. Experiment with different width values for the child element."
      />
      <div className={styles.parent}>
        <div className={styles.child}>
          <div className={styles.grandChild}></div>
        </div>
      </div>
    </div>
  );
};

export default Exercise14;
