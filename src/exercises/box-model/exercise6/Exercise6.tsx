import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise6.module.css";

const Exercise6: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Padding"
        content="Create a div with a background color and add text inside it. Experiment with different padding values on all sides (top, right, bottom, left) to see how padding affects the inner space around the text and the size of the div."
      />
      <div className={styles.parent}>
        <div className={`${styles.boxStyle} ${styles.first}`}>
          <p>I have a same padding of 30px on all sides</p>
        </div>
      </div>
    </div>
  );
};

export default Exercise6;
