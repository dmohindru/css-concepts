import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise6.module.css";

const Exercise6: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Combinator"
        content="Exercise 6: Add multiple elements (like p, h2, span) within a parent container and use the general sibling combinator (~) to style elements following a certain type. "
      />
      <div className={styles.general_sibling}>
        <h2>I am header</h2>
        <p>I am paragraph 1 a general sibling of h2</p>
        <span>I am span 1 a general sibling of h2</span>
        <p>I am paragraph 2 a general sibling of h2</p>
        <span>I am span 2 a general sibling of h2</span>
      </div>
    </div>
  );
};

export default Exercise6;
