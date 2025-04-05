import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise4.module.css";

const Exercise4: React.FC = () => {
  throw new Error("Not implemented");
  return (
    <div className="container">
      <ExerciseTitle
        title="Combinator"
        content="Exercise 4: Place a header (h2) immediately followed by a paragraph (p) and use the adjacent sibling combinator (h2 + p) to style only the first paragraph after the header."
      />
      <p>Solution</p>
      <div className={styles.sibling}>
        <h2>I am a header</h2>
        <p>I am first paragraph sibling of h2</p>
        <p>I am second paragraph sibling of h2</p>
      </div>
      <p>I am a paragraph and not a sibling of any h2</p>
    </div>
  );
};

export default Exercise4;
