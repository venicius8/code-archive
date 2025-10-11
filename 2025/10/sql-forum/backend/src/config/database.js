const { neon } = require("@neondatabase/serverless");

const initializeDatabase = async () => {
  const databaseClient = neon(process.env.DATABASE_URL);
  try {
    await databaseClient`SELECT 1`;
    console.log("Banco de dados inicializado");
    return databaseClient;
  } catch (error) {
    console.error("Houve um erro ao iniciar o banco de dados: " + error);
    throw error;
  }
};

module.exports = initializeDatabase;
