import React from "react";
import { Route, Routes } from "react-router-dom";
import Selector from "../examples/selector/Selector";
import Exercise1 from "../examples/selector/exercise1/Exercise1";
import Exercise2 from "../examples/selector/exercise2/Exercise2";
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
