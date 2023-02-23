import "./App.css";
import { Routes, Route } from "react-router-dom";
import Pdfeditor from "./Pages/PDFEditor";
function App() {
  return (
    <Routes>
      <Route path="/pdfeditor" element={<Pdfeditor />} />
    </Routes>
  );
}

export default App;
