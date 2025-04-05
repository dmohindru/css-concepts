import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise1.module.css";

const Exercise1: React.FC = () => {
  throw new Error("Not implemented");
  const exerciseTitle = `Exercise 1: Create three div elements with class
      names box, circle, and triangle. Use element selectors (div), class
      selectors (.box, .circle, .triangle), and ID selectors to style each
      element differently.`;

  return (
    <div className="container">
      <ExerciseTitle title="Basic Selector" content={exerciseTitle} />
      <div>
        <p>Solution</p>
        <div className={styles.box}>Box</div>
        <div className={styles.circle}>Circle</div>
        <div className={styles.triangle}>Triangle</div>
        <div id={styles.square}>Square</div>
      </div>
    </div>
  );
};

export default Exercise1;
