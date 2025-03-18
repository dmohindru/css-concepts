import React from "react";

type ExerciseTitleProps = {
  content: string;
};
const ExerciseTitle: React.FC<ExerciseTitleProps> = ({ content }) => {
  return <h3>{content}</h3>;
};

export default ExerciseTitle;
