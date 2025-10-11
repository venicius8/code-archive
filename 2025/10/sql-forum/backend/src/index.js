require("dotenv").config();
const express = require("express");
const postRouter = require("./routers/postRouter");
const initializeDatabase = require("./config/database");

const app = express();
app.use(express.json());

app.use("/api/posts", postRouter);

const port = process.env.PORT;

app.listen(port, async () => {
  await initializeDatabase();
  console.log("Servidor rodando na porta " + port);
});
