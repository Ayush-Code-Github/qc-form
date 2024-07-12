import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import InspectionForm from "./components/InspectionForm";
import "./styles/InspectionForm.css";

import MyPdfComponent from "./pdf/InspectionReport.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InspectionForm />} />
        <Route path="/report" element={<MyPdfComponent />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
