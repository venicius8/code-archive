const express = require("express");
const authRoute = require("./routes/auth.js");
const createRoute = require("./routes/create.js");
const feedRoute = require("./routes/feed.js");
require("dotenv").config();
const connectDB = require("./config/db.js");

const app = express();

connectDB();
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/create", createRoute);
app.use("/api/feed", feedRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
