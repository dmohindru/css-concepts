import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise20.module.css";

const Exercise20: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Mini Project"
        content="Build a 'card' component with a title, image, and text. Use the box model to give it a consistent padding, add a border to separate each card visually, and use margin to add space between multiple cards."
      />
    </div>
  );
};

export default Exercise20;
