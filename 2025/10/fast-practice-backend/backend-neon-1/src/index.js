const express = require("express");
require("dotenv").config();
const petsRouter = require("./routes/petsRouter");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/api/pets", petsRouter);

app.listen(port, () => console.log("Servidor rodando na porta: " + port));
