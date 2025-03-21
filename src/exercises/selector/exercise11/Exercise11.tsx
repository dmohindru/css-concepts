import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise11.module.css";

const Exercise11: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Pseudo-classes"
        content="Make a form with multiple input fields. Use the :focus pseudo-class to change the border color of an input when it is focused."
      />
      <p>Solution</p>
      <div className={styles.form}>
        <form>
          <input type="text" placeholder="First Name" />
          <br />
          <input type="text" placeholder="Last Name" />
          <br />
          <input type="text" placeholder="Email" />
          <br />
          <input type="text" placeholder="Address" />
          <br />
          <button type="submit">Submit</button>
          <button data-action="reset">Reset</button>
        </form>
      </div>
    </div>
  );
};

export default Exercise11;
