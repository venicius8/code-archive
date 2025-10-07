require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const posts = [
  {
    id: 1,
    user: "fernando8",
    content:
      "Quero ser front-end ainda esse ano e queria uma linguagem simples de começar...",
    likes: 23,
    createdAt: "2025-10-06",
  },
  {
    id: 2,
    user: "gabrielaa12",
    content:
      "Estou em uma dúvida cruel sem saber se começo por SQL ou NoSQL. O que vocês recomendam?",
    likes: 33,
    createdAt: "2025-10-05",
  },
];

app.get("/mostliked", (req, res) => {
  const sortedPosts = [...posts].sort((a, b) => b.likes - a.likes);
  res.json(sortedPosts);
});

app.get("/newposts", (req, res) => {});

const port = process.env.PORT;

app.listen(port, () => console.log("Servidor rodando na porta " + port));
