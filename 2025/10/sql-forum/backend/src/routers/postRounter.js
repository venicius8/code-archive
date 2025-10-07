const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/mostliked", postController.getMostLiked);

module.exports = router;
