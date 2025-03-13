import express from "express";
const router = express.Router();

router.post("/register", (req, res) => {
  // Lógica de registro
  res.json({ message: "User registered" });
});

export default router;