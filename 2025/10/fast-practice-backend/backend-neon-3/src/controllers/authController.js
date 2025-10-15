const prisma = require("../lib/prisma");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  const { nickname, password } = req.body;

  try {
    const hashed = await argon2.hash(password);

    await prisma.user.create({
      data: {
        nickname,
        password: hashed,
      },
    });

    res.status(201).json({ message: "Usário criado com sucesso" });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { nickname, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { nickname } });
    if (!existingUser)
      return res.status(401).json({ message: "Credenciais inválidas" });

    const checkPassword = await argon2.verify(existingUser.password, password);
    if (!checkPassword)
      return res.status(401).json({ message: "Credenciais inválidas" });

    const token = jwt.sign({ id: existingUser.id }, process.env.JWT, {
      expiresIn: "7d",
    });

    res.status(202).json({ message: "Login realizado com sucesso", token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  login,
};
