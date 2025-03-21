import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise7.module.css";

const Exercise7: React.FC = () => {
  const title = "Attribute Selectors";
  const content =
    "Create a form with multiple input elements of different types (text, email, password, checkbox). Use attribute selectors to style all inputs of type text (input[type='text']) with a different background color.";
  return (
    <div className="container">
      <ExerciseTitle title={title} content={content} />
      <p>Solution</p>
      <form className={styles.formText}>
        <input type="text" placeholder="First Name" />
        <br />
        <br />
        <input type="text" placeholder="Last Name" />
        <br />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <br />
        <input type="checkbox" />
        <br />
        <br />
      </form>
    </div>
  );
};

export default Exercise7;
