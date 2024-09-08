import express from "express";
import cors from "cors";

<<<<<<< HEAD
import gadosRoutes from "./routes/gados";
import racasRoutes from "./routes/racas";
=======
import carrosRoutes from "./routes/carros";
import marcasRoutes from "./routes/marcas";
>>>>>>> e3fde6d222bb3cb5930985faa38bc60390da5147
const app = express();
const port = 3004;

app.use(express.json());
app.use(cors());
<<<<<<< HEAD
app.use("/gados", gadosRoutes);
app.use("/racas", racasRoutes);

app.get("/", (req, res) => {
  res.send("API : Sistema de venda de gado");
=======
app.use("/carros", carrosRoutes);
app.use("/marcas", marcasRoutes);

app.get("/", (req, res) => {
  res.send("API : Sistema de controle de veículos");
>>>>>>> e3fde6d222bb3cb5930985faa38bc60390da5147
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
