const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Há um usuário existente" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User ({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();

        res.status(201).json({ message: "Usuário criado com sucesso!" });
        
    } catch (err) {
        res.status(500).json({ message: "Houve um erro interno do servidor" });
    }
}

const logUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({ message: "Credenciais inválidas" });
        }
        
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Credenciais inválidas" });
        }

        const token = jwt.sign(
            { id: existingUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" },
        );

        res.status(202).json({
            message: `Login realizado com sucesso, ${existingUser.name}`,
            token,
        });

    } catch (err) {
        res.status(500).json({ message: "Houve um erro no servidor"});
    }
}

module.exports = {
    createUser,
    logUser,
}
