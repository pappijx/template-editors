import React from "react";
import { Route, Routes } from "react-router-dom";
import OGEmailEditor from "../Pages/OGEmailEditor";
import Pdfeditor from "../Pages/PDFEditor";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Pdfeditor />} /> */}
      <Route path="/" element={<OGEmailEditor />} />
    </Routes>
  );
};

export default AppRoutes;
