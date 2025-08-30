import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise8.module.css";

const Exercise8: React.FC = () => {
  const title = "Padding";
  const content =
    "Nest a smaller box within a larger box and apply padding to the parent container. Observe how padding affects the positioning of the inner element.";
  return (
    <div className="container">
      <ExerciseTitle title={title} content={content} />
      <div className={styles.parent}>
        <div className={styles.child}>
          <div className={styles.grandChild}></div>
        </div>
      </div>
    </div>
  );
};

export default Exercise8;
