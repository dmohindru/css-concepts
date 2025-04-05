import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Exercise1,
  Exercise2,
  Exercise3,
  Exercise4,
  Exercise5,
  Exercise6,
  Exercise7,
  Exercise8,
  Exercise9,
  Exercise10,
  Exercise11,
  Exercise12,
  Exercise13,
  Exercise14,
  Exercise15,
  Exercise16,
  Exercise17,
  Exercise18,
  Exercise19,
  Exercise20,
} from "../exercises/css-functions";

const CssFunctionsRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="exercise1" element={<Exercise1 />} />
      <Route path="exercise2" element={<Exercise2 />} />
      <Route path="exercise3" element={<Exercise3 />} />
      <Route path="exercise4" element={<Exercise4 />} />
      <Route path="exercise5" element={<Exercise5 />} />
      <Route path="exercise6" element={<Exercise6 />} />
      <Route path="exercise7" element={<Exercise7 />} />
      <Route path="exercise8" element={<Exercise8 />} />
      <Route path="exercise9" element={<Exercise9 />} />
      <Route path="exercise10" element={<Exercise10 />} />
      <Route path="exercise11" element={<Exercise11 />} />
      <Route path="exercise12" element={<Exercise12 />} />
      <Route path="exercise13" element={<Exercise13 />} />
      <Route path="exercise14" element={<Exercise14 />} />
      <Route path="exercise15" element={<Exercise15 />} />
      <Route path="exercise16" element={<Exercise16 />} />
      <Route path="exercise17" element={<Exercise17 />} />
      <Route path="exercise18" element={<Exercise18 />} />
      <Route path="exercise19" element={<Exercise19 />} />
      <Route path="exercise20" element={<Exercise20 />} />
    </Routes>
  );
};

export default CssFunctionsRoutes;
