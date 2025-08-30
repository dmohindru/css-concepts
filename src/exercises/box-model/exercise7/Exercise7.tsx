import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise7.module.css";

const Exercise7: React.FC = () => {
  const title = "Padding";
  const content =
    "Create a form with multiple input elements of different types (text, email, password, checkbox). Use attribute selectors to style all inputs of type text (input[type='text']) with a different background color.";
  return (
    <div className="container">
      <ExerciseTitle title={title} content={content} />
      <div className={styles.parent}>
        <button className={styles.buttonSymmetric}>Click Me</button>
        <button className={styles.buttonAsymmetric}>Click Me</button>
      </div>
    </div>
  );
};

export default Exercise7;
