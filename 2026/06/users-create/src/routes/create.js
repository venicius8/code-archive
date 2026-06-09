const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.js");
const { createPost } = require("../services/create.service.js");

router.post("/", authenticate, createPost);

module.exports = router;
