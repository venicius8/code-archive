class PlayerService {
  constructor(databaseClient) {
    this.db = databaseClient;
  }

  async getAllPlayers() {
    return this.db`SELECT * FROM players ORDER BY score DESC`;
  }

  async createPlayer(name, score = 0) {
    if (!name) throw new Error("Name is required");
    const [player] = await this.db`
      INSERT INTO players (name, score)
      VALUES (${name}, ${score})
      RETURNING *
    `;
    return player;
  }

  async deletePlayer(id) {
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId) || parsedId <= 0) {
      throw new Error("Invalid ID");
    }
    const [deleted] = await this.db`
      DELETE FROM players WHERE id = ${parsedId}
      RETURNING id
    `;
    if (!deleted) {
      throw new Error("Player not found");
    }
    return deleted;
  }
}

module.exports = PlayerService;
