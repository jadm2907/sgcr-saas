import express from "express";
import { createDatabase } from "../services/databaseService";
import { generateToken } from "../services/authService";

const router = express.Router();

// Ruta de registro
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const dbName = `tenant_${email.split("@")[0]}`;

  try {
    await createDatabase(dbName);
    const token = generateToken(email); // Generar token
    res.json({ message: "Usuario registrado correctamente", token });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar el usuario" });
  }
});

export default router;