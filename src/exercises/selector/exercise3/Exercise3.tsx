import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise3.module.css";

const Exercise3: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle content="Exercise 3: Create a div container with a h2 header and a few p elements inside. Style the p elements inside the div container using a descendant selector (div p) to apply different text colors." />
      <p>Solution</p>
      <div className={styles.descendant}>
        <div>
          <h2>I am a header inside a div</h2>
          <p>I am paragraph 1 inside a div</p>
          <p>I am paragraph 2 inside a div</p>
          <p>I am paragraph 3 inside a div</p>
        </div>
      </div>
      <p>I am a paragraph outside a div</p>
    </div>
  );
};

export default Exercise3;
