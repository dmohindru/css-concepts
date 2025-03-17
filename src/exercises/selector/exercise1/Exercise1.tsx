import React from "react";
import "./exercise1.css";

const Exercise1: React.FC = () => {
  return (
    <div className="container">
      <h3>
        Exercise 1: Create three div elements with class names box, circle, and
        triangle. Use element selectors (div), class selectors (.box, .circle,
        .triangle), and ID selectors to style each element differently.
      </h3>
      Exercise 11
      <div>
        <p>Solution</p>
        <div className="box">Box</div>
        <div className="circle">Circle</div>
        <div className="triangle">Triangle</div>
        <div id="square">Square</div>
      </div>
    </div>
  );
};

export default Exercise1;
