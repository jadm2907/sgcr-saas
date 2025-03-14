import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bienvenido a SGCR SaaS</h1>
      <Link to="/register">Ir al Registro</Link>
    </div>
  );
};

export default Home;