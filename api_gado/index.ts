import express from "express";
import cors from "cors";
import gadosRoutes from "./routes/gados";
import racasRoutes from "./routes/racas";

const app = express();
const port = 3004;

app.use(express.json());
app.use(cors());
app.use("/gados", gadosRoutes);
app.use("/racas", racasRoutes);

app.get("/", (req, res) => {
  res.send("API : Sistema de venda de gado");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
