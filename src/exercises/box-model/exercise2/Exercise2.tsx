import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise2.module.css";

const Exercise2: React.FC = () => {
  const exerciseTitle = `Experiment with the box-sizing property by creating two div elements, each with the same width and height, but set box-sizing: content-box for one and box-sizing: border-box for the other. Observe the differences in their rendered sizes.`;
  return (
    <div className="container">
      <ExerciseTitle title="Box Model" content={exerciseTitle} />
      <div className={styles.parent}>
        <div className={`${styles.boxStyle} ${styles.borderBox}`}>
          <p>
            I have a<br></br>box-sizing: border-box
            <br></br>width: 200px
            <br></br>height: 200px
          </p>
        </div>
        <div className={`${styles.boxStyle} ${styles.contentBox}`}>
          <p>
            I have a<br></br>box-sizing: content-box
            <br></br>width: 200px
            <br></br>height: 200px
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exercise2;
