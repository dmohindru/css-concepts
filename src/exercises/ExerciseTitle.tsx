import React from "react";

type ExerciseTitleProps = {
  title: string;
  content: string;
};
const ExerciseTitle: React.FC<ExerciseTitleProps> = ({ title, content }) => {
  return (
    <>
      <h2>{title}</h2>
      <h3>{content}</h3>
    </>
  );
};

export default ExerciseTitle;
