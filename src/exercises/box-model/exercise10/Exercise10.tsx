import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise10.module.css";

const Exercise10: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Border"
        content="Create a card component with different borders on each side (e.g., a thicker border on the bottom to simulate a 'shadow' effect). Use different colors and styles for each side of the border."
      />
      <div className={styles.parent}>
        <div className={styles.first}></div>
      </div>
    </div>
  );
};

export default Exercise10;
