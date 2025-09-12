import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise19.module.css";

const Exercise19: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Positioning with Margins and Padding"
        content="Create a layout with multiple boxes in a row. Use padding and margins to space them evenly. Try to achieve equal spacing around each box and practice adjusting margins to control spacing between elements without affecting alignment."
      />
      <div className={styles.parent}>
        <div className={styles.child}>
          <button className={styles.myButton}>Click Me</button>
          <button className={styles.myButton}>Click Me</button>
          <button className={styles.myButton}>Click Me</button>
        </div>
      </div>
    </div>
  );
};

export default Exercise19;
