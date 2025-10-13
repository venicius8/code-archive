const express = require("express");
const router = express.Router();
const petsController = require("../controllers/petsController");

router.get("/", petsController.getPets);

router.post("/", petsController.createPet);

router.delete("/:id", petsController.deletePet);

module.exports = router;
