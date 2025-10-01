require("dotenv").config();
const express = require("express");
const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const initDatabase = async () => {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS players (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        score INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
  } catch (err) {
    console.error("Erro ao inicializar o banco de dados:", err);
    throw err;
  }
};

app.get("/players", async (req, res) => {
  try {
    const result = await sql`SELECT * FROM players ORDER BY score DESC`;
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.post("/players", async (req, res) => {
  try {
    const { name, score = 0 } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Nome é obrigatório" });
    }
    const result = await sql`
      INSERT INTO players (name, score)
      VALUES (${name}, ${score})
      RETURNING *
    `;
    res.status(201).json(result[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

(async () => {
  try {
    await initDatabase();
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Erro ao iniciar servidor:", err);
    process.exit(1);
  }
})();
