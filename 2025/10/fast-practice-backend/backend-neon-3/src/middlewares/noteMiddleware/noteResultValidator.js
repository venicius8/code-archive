const { validationResult } = require("express-validator");

const noteResultValidator = (req, res, next) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Título é obrigatório" });

  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({
      errors: errors.array().map((error) => ({
        field: error.param,
        message: error.msg,
      })),
    });

  next();
};

module.exports = noteResultValidator;
