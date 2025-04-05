import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise19.module.css";

const Exercise19: React.FC = () => {
  throw new Error("Not implemented");
  return (
    <div className="container">
      <ExerciseTitle
        title="Challenge Exercise: Combined Selectors"
        content="Style a paragraph where only the **first word** is bold and colored differently. Use combinators and pseudo-classes to style specific words, such as italicizing every **third word** and highlighting words that contain the letter 'e'."
      />
      <p>Solution</p>
      <p>
        <span className={styles.firstWord}>Hello</span> this is a{" "}
        <span className={styles.highlight}>test</span> paragraph where{" "}
        <span className={styles.thirdWord}>every</span> third word is{" "}
        <span className={styles.thirdWord}>italicized</span>.
      </p>
    </div>
  );
};

export default Exercise19;
