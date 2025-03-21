import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise2.module.css";

const Exercise2: React.FC = () => {
  const exerciseTitle = `Exercise2: Make a simple list with multiple <li> elements. 
  Use a class selector to style specific items (e.g., make every item with the class highlight have a yellow background).`;
  return (
    <div className="container">
      <ExerciseTitle title="Basic Selector" content={exerciseTitle} />
      <p>Solution</p>
      <ol>
        <li>First</li>
        <li className={styles.blueBackground}>Second</li>
        <li>Third</li>
        <li className={styles.blueBackground}>Fourth</li>
        <li>Fifth</li>
      </ol>
    </div>
  );
};

export default Exercise2;
