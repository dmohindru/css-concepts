import React from "react";
import { Route, Routes } from "react-router-dom";
import Selector, { Exercise1, Exercise2 } from "../exercises/selector";
const SelectorRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Selector />} />
      <Route path="exercise1" element={<Exercise1 />} />
      <Route path="exercise2" element={<Exercise2 />} />
    </Routes>
  );
};

export default SelectorRoutes;
