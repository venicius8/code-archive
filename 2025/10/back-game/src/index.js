require("dotenv").config();
const express = require("express");
const { initDatabase } = require("./config/database");
const playersRoutes = require("./routes/players");

/*
app.put("/players/:id", async (req, res) => {
  const id = req.params.id;
  if (isNaN(id) || id < 0) {
    res.status(400).json({ message: "ID inválido" });
  }

  const result = await sql``;

  try {
    
  } catch (err) {
    
  }
});
*/

const startServer = async () => {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());

  try {
    await initDatabase();
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Erro ao iniciar servidor:", err);
    process.exit(1);
  }
};

startServer();
