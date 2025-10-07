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

const getMostLiked = (req, res) => {
  const sortedPosts = [...posts].sort((a, b) => b.likes - a.likes);
  res.json(sortedPosts);
};

const getNewPosts = (req, res) => {};

module.exports = {
  getMostLiked,
  getNewPosts,
};
