const express = require("express");
const app = express();
require("dotenv").config();
const walkingRouter = require("./routers/walkingRouter");
const connectDatabse = require("./config/databaseConection");

app.use(express.json());
const port = process.env.PORT || 3000;
app.use("/api/walking", walkingRouter);

connectDatabse();
app.listen(port, () => console.log("Servidor rodando na porta: " + port));
