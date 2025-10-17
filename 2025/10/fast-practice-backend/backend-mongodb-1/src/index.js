const express = require("express");
const app = express();
require("dotenv").config();
const walkingRouter = require("./routers/walkingRouter");
const connectDatabse = require("./config/databaseConection");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
const port = process.env.PORT || 3000;
app.use("/api/walking", walkingRouter);
app.use(errorHandler);

connectDatabse();
app.listen(port, () => console.log("Servidor rodando na porta: " + port));
