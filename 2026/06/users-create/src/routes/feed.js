const express = require("express");
const router = express.Router();
const { seeFeed, lookFor } = require("../services/feed.service.js");

router.get("/:id", lookFor);
router.get("/", seeFeed);

module.exports = router;
