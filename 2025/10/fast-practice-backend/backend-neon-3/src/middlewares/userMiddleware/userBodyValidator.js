const { body } = require("express-validator");

const userBodyValidator = [
  body("nickname")
    .trim()
    .toLowerCase()
    .isLength({ min: 4, max: 20 })
    .withMessage("Nickname deve ter entre 4 a 20 caracteres")
    .isAlphanumeric()
    .withMessage("Nickname deve ser alfanumérico"),

  body("password")
    .trim()
    .isLength({ min: 8, max: 40 })
    .withMessage("Senha deve ter entre 8 a 40 caracteres"),
];

module.exports = userBodyValidator;
