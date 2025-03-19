import React from "react";
import { Route, Routes } from "react-router-dom";
import Selector, {
  Exercise1,
  Exercise2,
  Exercise3,
  Exercise4,
  Exercise5,
  Exercise6,
  Exercise7,
} from "../exercises/selector";
const SelectorRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Selector />} />
      <Route path="exercise1" element={<Exercise1 />} />
      <Route path="exercise2" element={<Exercise2 />} />
      <Route path="exercise3" element={<Exercise3 />} />
      <Route path="exercise4" element={<Exercise4 />} />
      <Route path="exercise5" element={<Exercise5 />} />
      <Route path="exercise6" element={<Exercise6 />} />
      <Route path="exercise7" element={<Exercise7 />} />
    </Routes>
  );
};

export default SelectorRoutes;
