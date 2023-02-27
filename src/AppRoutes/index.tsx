import React from "react";
import { Route, Routes } from "react-router-dom";
import Pdfeditor from "../Pages/PDFEditor";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Pdfeditor />} />
    </Routes>
  );
};

export default AppRoutes;
