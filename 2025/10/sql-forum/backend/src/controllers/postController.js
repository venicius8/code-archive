const prisma = require("../prisma/client");

const createPost = async (req, res) => {
  const { author, content } = req.body;

  try {
    const newPost = await prisma.post.create({
      data: {
        author,
        content,
        like: 0,
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Erro ao criar post: " + error);
    res.status(500).json({ error: "Houve um erro ao criar o post" });
  }
};

const getMostLiked = async (req, res) => {
  const sortedPosts = await prisma.post.findMany({
    orderBy: {
      like: "desc",
    },
  });
  res.json(sortedPosts);
};

module.exports = {
  getMostLiked,
  createPost,
};
