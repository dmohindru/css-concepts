import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise15.module.css";

const Exercise15: React.FC = () => {
  throw new Error("Not implemented");
  return (
    <div className="container">
      <ExerciseTitle
        title="Pseudo-elements"
        content="Create a quote block using blockquote and style it with ::before and ::after to add quotation marks around the text."
      />
      <p>Solution</p>
      <div className={styles.quote}>
        <p>Somewise code1</p>
      </div>
      <div className={styles.quote}>
        <p>Somewise code2</p>
      </div>
    </div>
  );
};

export default Exercise15;
