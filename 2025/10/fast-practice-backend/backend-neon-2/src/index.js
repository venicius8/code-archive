require("dotenv").config();
const express = require("express");
const app = express();
const productRouter = require("./routers/productRouter");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api/products", productRouter);

app.use(errorHandler);

app.listen(port, () => console.log("Servidor funcionando na porta " + port));
