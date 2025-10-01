class PlayerController {
  constructor(playerService) {
    this.playerService = playerService;
  }

  async getAllPlayers(req, res) {
    const players = await this.playerService.getAllPlayers();
    res.status(200).json(players);
  }

  async createPlayer(req, res) {
    const { name, score } = req.body;
    const player = await this.playerService.createPlayer(name, score);
    res.status(201).json(player);
  }

  async deletePlayer(req, res) {
    await this.playerService.deletePlayer(req.params.id);
    res.status(204).json({ message: "Jogador excluído com sucesso" });
  }
}

module.exports = PlayerController;
