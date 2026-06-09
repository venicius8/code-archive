const User = require("../models/create.js");

const seeFeed = async (req, res) => {
    try {
        const contents = await User.find();
        res.json({ contents });
    } catch (err) {
        res.status(500).json({ message: "Houve um erro no servidor" });
    }
};

const lookFor = async (req, res) => {
    try {
        const user = await User.find({ authorId: req.params.id });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Houve um erro no servidor" });
    }
};

module.exports = {
    seeFeed,
    lookFor,
};
