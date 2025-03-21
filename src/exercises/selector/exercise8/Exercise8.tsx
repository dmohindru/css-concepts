import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise8.module.css";

const Exercise8: React.FC = () => {
  const title = "Attribute Selectors";
  const content =
    "Style links based on their href attribute. Make links with href that starts with 'http' open in a new tab with a specific icon. Use [href^='http'] to apply styles.";
  return (
    <div className="container">
      <ExerciseTitle title={title} content={content} />
      <div className={styles.links}>
        <a href="https://www.google.com" target="_blank">
          Google
        </a>
        <br />
        <a href="https://www.facebook.com">Facebook</a>
        <br />
        <a href="https://www.twitter.com">Twitter</a>
        <br />
        <a href="https://www.github.com">Github</a>
        <br />
        <a href="/home">Home</a>
      </div>
    </div>
  );
};

export default Exercise8;
