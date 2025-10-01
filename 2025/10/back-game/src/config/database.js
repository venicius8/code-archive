const { neon } = require("@neondatabase/serverless");

const initDatabase = async () => {
  const databaseClient = neon(process.env.DATABASE_URL);
  try {
    await databaseClient`
      CREATE TABLE IF NOT EXISTS players (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        score INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log("Banco de dados inicializado");
    return databaseClient;
  } catch (err) {
    console.error("Erro ao inicializar o banco de dados:", err);
    throw err;
  }
};

module.exports = { initDatabase };
