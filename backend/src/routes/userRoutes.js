"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.post("/register", function (req, res) {
    // Lógica de registro
    res.json({ message: "User registered" });
});
exports.default = router;
