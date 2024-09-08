import { router, prisma } from "./maes";

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, endereco, tel, nasc } = req.body;

  if (!nome || !endereco || !tel || !nasc) {
    res.status(400).json({ erro: "Informe nome, endereco, tel e nasc" });
    return;
  }

  try {
    const mae = await prisma.mae.update({
      where: { id: Number(id) },
      data: { nome, endereco, tel, nasc: new Date(nasc) },
    });
    res.status(200).json(mae);
  } catch (error) {
    res.status(400).json(error);
  }
});
