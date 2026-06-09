const Create = require("../models/create.js");

const createPost = async (req, res) => {
    const { title, content } = req.body;

    try {
        const post = new Create ({
            authorId: req.user.id,
            title,
            content,
        });

        await post.save();

        res.status(201).json({
            message: "Post criado com sucesso!",
            post,
        });

    } catch (err) {
        res.status(500).json({ message: "Houve um erro no servidor" });
    }
}

module.exports = { createPost };
