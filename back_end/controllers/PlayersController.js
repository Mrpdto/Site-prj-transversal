const prisma = require('../config/prisma');

class PlayersController {
  async index(req, res) { // Previously create
    const { name, email, gameData } = req.body;
    try {
      const newPlayer = await prisma.player.create({
        data: {
          name,
          email,
          gameData,
        },
      });
      res.status(201).json(newPlayer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async store(req, res) { // This might map to the same as `index` or another method for creating players
    // Implementation here
  }

  async show(req, res) { // Previously read
    const { id } = req.params;
    try {
      const player = await prisma.player.findUnique({ where: { id } });
      if (!player) {
        return res.status(404).json({ message: 'Player not found' });
      }
      res.status(200).json(player);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update and Delete methods seem correctly named, so keep them as is



  // Update a player's data
  async update(req, res) {
    const { id } = req.params;
    const updateData = req.body;
    try {
      const updatedPlayer = await prisma.player.update({
        where: { id },
        data: updateData,
      });
      res.status(200).json(updatedPlayer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete a player
  async delete(req, res) {
    const { id } = req.params;
    try {
      await prisma.player.delete({ where: { id } });
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PlayersController();

