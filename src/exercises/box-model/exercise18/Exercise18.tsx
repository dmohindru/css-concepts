import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise18.module.css";

const Exercise18: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Positioning with Margins and Padding"
        content="Create a button with a shadow effect using margin and padding. Add a bottom margin and padding to create an 'elevated' look. Apply padding inside the button to increase the text spacing."
      />
      <div className={styles.parent}>
        <button className={styles.myButton}>Click Me</button>
      </div>
    </div>
  );
};

export default Exercise18;
