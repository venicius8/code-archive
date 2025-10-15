const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userBodyValidator = require("../middlewares/userMiddleware/userBodyValidator");
const userResultValidator = require("../middlewares/userMiddleware/userResultValidator");

router.post(
  "/signup",
  userBodyValidator,
  userResultValidator,
  authController.signup
);
router.post(
  "/login",
  userBodyValidator,
  userResultValidator,
  authController.login
);

module.exports = router;
