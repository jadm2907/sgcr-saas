import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});