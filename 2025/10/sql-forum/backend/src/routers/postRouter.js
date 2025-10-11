const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/mostliked", postController.getMostLiked);

router.post("/createpost", postController.createPost);

module.exports = router;
