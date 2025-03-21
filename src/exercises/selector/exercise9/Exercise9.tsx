import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise9.module.css";

const Exercise9: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Attribute Selectors"
        content="Create a set of buttons with data-action attributes (like data-action='save', data-action='delete'). Use attribute selectors to style each button differently based on its data-action value."
      />
      <p>Solution</p>
      <div className={styles.dataAction}>
        <button data-action="save">Save</button>
        <br />
        <button data-action="delete">Delete</button>
      </div>
    </div>
  );
};

export default Exercise9;
