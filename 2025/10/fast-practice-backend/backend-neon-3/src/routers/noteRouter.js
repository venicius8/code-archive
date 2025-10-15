const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");
const auth = require("../middlewares/userMiddleware/auth");
const noteBodyValidator = require("../middlewares/noteMiddleware/noteBodyValidator");
const noteResultValidator = require("../middlewares/noteMiddleware/noteResultValidator");

router.get("/", auth, noteController.getNotes);

router.get("/:id", auth, noteController.searchNote);

router.post(
  "/",
  auth,
  noteBodyValidator,
  noteResultValidator,
  noteController.createPost
);

router.put(
  "/:id",
  auth,
  noteBodyValidator,
  noteResultValidator,
  noteController.updateNote
);

router.delete("/:id", auth, noteController.deleteNote);

module.exports = router;
