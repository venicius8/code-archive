const mongoose = require("mongoose");

const connectDatabse = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Banco de dados conectado com sucesso");
  } catch (error) {
    console.error("Houve um erro ao conectar ao MongoDB: " + error);
    process.exit(1);
  }
};

module.exports = connectDatabse;
