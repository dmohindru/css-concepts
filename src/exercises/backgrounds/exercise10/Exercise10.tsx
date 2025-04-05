import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise10.module.css";

const Exercise10: React.FC = () => {
  throw new Error("Not implemented");
  return (
    <div className="container">
      <ExerciseTitle
        title="Pseudo-classes"
        content="Create a buttons and style with the :hover and :focus states with different background and text colors."
      />
      <p>Solution</p>
      <div>
        <button className={styles.button}>Button</button>
      </div>
    </div>
  );
};

export default Exercise10;
