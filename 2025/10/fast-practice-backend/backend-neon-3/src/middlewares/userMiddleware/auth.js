const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) return res.status(401).json({ message: "Acesso negado" });

    const decoded = jwt.verify(token, process.env.JWT);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
};

module.exports = auth;
