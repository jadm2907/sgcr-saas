"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.post("/register", (req, res) => {
    // Lógica de registro
    res.json({ message: "User registered" });
});
exports.default = router;
