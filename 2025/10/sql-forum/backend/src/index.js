require("dotenv").config();
const express = require("express");
const postRouter = require("./routers/postRounter");

const app = express();
app.use(express.json());

app.use("/api/posts", postRouter);

const port = process.env.PORT;

app.listen(port, () => console.log("Servidor rodando na porta " + port));
