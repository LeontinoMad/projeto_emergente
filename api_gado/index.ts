import express from "express";
import cors from "cors";

import carrosRoutes from "./routes/carros";
import marcasRoutes from "./routes/marcas";
const app = express();
const port = 3004;

app.use(express.json());
app.use(cors());
app.use("/carros", carrosRoutes);
app.use("/marcas", marcasRoutes);

app.get("/", (req, res) => {
  res.send("API : Sistema de controle de veículos");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
