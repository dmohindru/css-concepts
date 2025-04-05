import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise14.module.css";

const Exercise14: React.FC = () => {
  throw new Error("Not implemented");
  return (
    <div className="container">
      <ExerciseTitle
        title="Pseudo-elements"
        content="Use ::before and ::after pseudo-elements to add decorative content to headings. For instance, add a line or icon before each heading."
      />
      <p>Solution</p>
      <div className={styles.headingWithLine}>
        <h3>Section title 1</h3>
        <h3>Section title 2</h3>
      </div>
    </div>
  );
};

export default Exercise14;
