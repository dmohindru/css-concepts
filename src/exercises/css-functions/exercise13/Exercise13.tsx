import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise13.module.css";

const Exercise13: React.FC = () => {
  throw new Error("Not implemented");
  return (
    <div className="container">
      <ExerciseTitle
        title="Pseudo-classes"
        content="Add a 'Read more' link to a paragraph. Use :visited to change the color of the link after it has been clicked."
      />
      <p>Solution</p>
      <a className={styles.link} href="https://www.google.com" target="_blank">
        Read more
      </a>
    </div>
  );
};

export default Exercise13;
