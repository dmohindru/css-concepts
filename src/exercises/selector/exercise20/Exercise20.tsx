import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise20.module.css";

const Exercise20: React.FC = () => {
  return (
    <div className="container">
      <ExerciseTitle
        title="Pseudo-classes"
        content="Style a **blockquote** where the **first letter** appears differently. Use combinators and pseudo-classes to style emphasized (`em`) and bold (`strong`) words uniquely. Add a hover effect that changes the background color of the blockquote."
      />
      <p>Solution</p>
      <blockquote className={styles.blockStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
        efficitur mi, id rutrum velit. Proin a justo sollicitudin, lobortis
        libero non, venenatis enim. Cras non purus lectus. Mauris porttitor a
        magna id laoreet. Duis semper feugiat mauris, ac molestie ex pharetra
        vitae. Praesent semper mauris ex, eget dictum neque lobortis sed.
        Suspendisse nec gravida tortor, in maximus turpis. Pellentesque in ipsum
        nulla. Morbi ullamcorper lectus eu tincidunt malesuada. Nunc sit amet
        magna sit amet turpis rutrum tincidunt sit amet a velit. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Donec suscipit libero a blandit pellentesque. Aenean pretium
        hendrerit augue eget aliquet. Vivamus a mauris volutpat felis efficitur
        condimentum. Cras sed dictum diam.
      </blockquote>
    </div>
  );
};

export default Exercise20;
