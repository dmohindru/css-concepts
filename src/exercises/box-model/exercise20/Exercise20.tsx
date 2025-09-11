import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise20.module.css";
import profileImage from "./dm.jpeg";

const Exercise20: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Mini Project"
        content="Build a 'card' component with a title, image, and text. Use the box model to give it a consistent padding, add a border to separate each card visually, and use margin to add space between multiple cards."
      />
      {/* <img src={profileImage}></img>
      <img src={bgImage}></img> */}
      <div className={styles.container}>
        <div className={styles.cardBox}>
          <div className={styles.cardImage}>
            <div className={styles.title}>Dhruv Mohindru</div>
            <div className={styles.position}>Senior Software Engineer</div>
            <div className={styles.imageContainer}>
              <img src={profileImage} />
            </div>
            <button className={styles.followButton}>Follow</button>
          </div>
          <div className={styles.cardText}></div>
        </div>
      </div>
    </div>
  );
};

export default Exercise20;
