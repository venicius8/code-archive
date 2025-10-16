const express = require("express");
const router = express.Router();
const walkingController = require("../controllers/walkingController");

router.get("/", walkingController.getWalking);
router.get("/:id", walkingController.searchWalking);
router.post("/", walkingController.createWalking);
router.put("/:id", walkingController.updateWalking);
router.delete("/:id", walkingController.deleteWalking);

module.exports = router;
