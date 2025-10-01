const express = require("express");
const PlayerController = require("../controllers/players");

const createPlayerRoutes = (playerService) => {
  const router = express.Router();
  const controller = new PlayerController(playerService);

  router.get("/", controller.getAllPlayers.bind(controller));
  router.post("/", controller.createPlayer.bind(controller));
  router.delete("/:id", controller.deletePlayer.bind(controller));

  return router;
};

module.exports = createPlayerRoutes;
