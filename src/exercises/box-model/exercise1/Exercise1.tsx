import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise1.module.css";

const Exercise1: React.FC = () => {
  const exerciseTitle = `Create a div with a set width and height. Apply different values of padding, border, and margin to see how each affects the element's total size and spacing on the page.`;

  return (
    <div className="container">
      <ExerciseTitle title="Box Model" content={exerciseTitle} />
      <div className={styles.parent}></div>
    </div>
  );
};

export default Exercise1;
