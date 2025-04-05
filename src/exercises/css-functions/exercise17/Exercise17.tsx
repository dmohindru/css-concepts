import React from "react";
import ExerciseTitle from "../../ExerciseTitle";
import styles from "./exercise17.module.css";

const Exercise17: React.FC = () => {
  throw new Error("Not implemented");
  return (
    <div className="container">
      <ExerciseTitle
        title="Pseudo-elements"
        content="Highlight text selections using ::selection and apply a different background and text color when text is selected."
      />
      <p>Solution</p>
      <div className={styles.highlight}>
        <p>
          Lorem ipsum dolor sit amet. Et nobis quia aut assumenda facere in
          dicta quasi rem sapiente ratione eos sint consequatur. Ex quisquam
          amet id enim totam aut exercitationem minima et commodi fuga et omnis
          possimus quo numquam quia! Ea quia quod est temporibus voluptates ut
          nobis dolores et saepe aspernatur et maiores doloremque? Aut sunt
          culpa qui harum libero sit culpa aspernatur cum beatae omnis eos quis
          magnam?{" "}
        </p>
        <p>
          Vel dolore iusto ut nemo explicabo ea vitae necessitatibus ea optio
          quae nam molestiae omnis? Sed doloribus asperiores hic perferendis
          aperiam eum quidem quia non nihil alias ut unde nobis.{" "}
        </p>
        <p>
          Sed galisum officia et vitae quod ut omnis veniam sit ipsa dolorum in
          nemo illo. Ea odio dolore ut dolores nisi id consequatur accusantium
          sit vitae consequatur et itaque omnis ea perferendis voluptatem vel
          natus asperiores. Et dolorem dolorem eum consequatur voluptates quo
          dolor sequi. Sit neque voluptatem eum quasi suscipit ut dolor natus
          sit omnis quis ut rerum voluptates vel autem dolorum et tempora
          voluptatem.{" "}
        </p>
      </div>
    </div>
  );
};

export default Exercise17;
