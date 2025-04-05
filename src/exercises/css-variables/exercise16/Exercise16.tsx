import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise16.module.css";

const Exercise16: React.FC = () => {
  throw new Error("Not implemented");
  return (
    <div className="container">
      <ExerciseTitle
        title="Pseudo-elements"
        content="Add an initial drop cap effect to the first letter of a paragraph using ::first-letter."
      />
      <p>Solution</p>
      <div className={styles.dropCap}>
        <p>This is a paragraph number one has initial drop effect</p>
        <p>This is a paragraph number two has initial drop effect</p>
      </div>
      <p>This is a paragraph number three doesn't have a initial drop effect</p>
    </div>
  );
};

export default Exercise16;
