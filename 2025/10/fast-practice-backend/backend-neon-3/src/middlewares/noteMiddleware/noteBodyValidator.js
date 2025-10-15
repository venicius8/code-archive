const { body } = require("express-validator");

const noteBodyValidator = [
  body("title")
    .trim()
    .isLength({ min: 1, max: 64 })
    .withMessage("Título deve ter entre 1 a 64 caracteres"),

  body("content")
    .trim()
    .isLength({ max: 10000 })
    .withMessage("Conteúdo deve ter menos que 10000 caracteres"),
];

module.exports = noteBodyValidator;
