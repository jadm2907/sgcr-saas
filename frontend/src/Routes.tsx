import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta principal */}
        <Route path="/register" element={<Register />} /> {/* Ruta de registro */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;