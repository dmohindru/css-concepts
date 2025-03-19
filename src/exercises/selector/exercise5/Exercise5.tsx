import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise5.module.css";

const Exercise5: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle content="Exercise 5: Create a list with nested ul elements. Use the child combinator (>) to style only the top-level li items." />
      <p>Solution</p>
      <ul className={styles.menu}>
        <li>Item 1</li>
        <li>
          Item 2
          <ul>
            <li>Sub-item 1</li>
            <li>Sub-item 2</li>
          </ul>
        </li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default Exercise5;
