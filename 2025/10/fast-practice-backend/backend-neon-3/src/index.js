const express = require("express");
const app = express();
require("dotenv").config();
const authRouter = require("./routers/authRouter");
const noteRouter = require("./routers/noteRouter");

app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api/auth", authRouter);
app.use("/api/notes", noteRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || "Houve um erro, tente essa ação um outro dia",
  });
});

app.listen(port, () => console.log("Servidor rodando na porta: " + port));
