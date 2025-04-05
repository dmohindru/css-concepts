import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise18.module.css";

const Exercise18: React.FC = () => {
  throw new Error("Not implemented");
  return (
    <div className="container">
      <ExerciseTitle
        title="Challenge Exercise: Combined Selectors"
        content="Create an unordered list where every even list item (li:nth-child(even)) has a different text color. Additionally, apply a hover effect that changes the background color differently when the user hovers over odd and even list item."
      />
      <p>Solution</p>
      <p>Unordered List</p>
      <div className={styles.listStyle}>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
          <li>Fifth item</li>
          <li>Sixth item</li>
          <li>Seventh item</li>
        </ul>
      </div>
    </div>
  );
};

export default Exercise18;
