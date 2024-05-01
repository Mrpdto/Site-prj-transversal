const prisma = require('../config/prisma');

class ScoresController {
  async addScore(req, res) {
    const { playerId, points } = req.body;
    try {
      const score = await prisma.score.create({
        data: {
          playerId,
          points,
        },
      });
      return res.status(201).json(score);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async getScoresByPlayer(req, res) {
    const { playerId } = req.params;
    try {
      const scores = await prisma.score.findMany({
        where: { playerId },
        orderBy: { points: 'desc' },
      });
      return res.status(200).json(scores);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

module.exports = new ScoresController();

