const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors'); 

const app = express();
const prisma = new PrismaClient();

app.use(cors());

app.get('/total-players', async (req, res) => {
  try {
    const count = await prisma.player.count();
    res.json({ totalPlayers: count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/best-score', async (req, res) => {
  try {
    const bestScore = await prisma.score.findFirst({
      orderBy: {
        points: 'desc'
      },
      include: {
        player: true
      }
    });
    res.json(bestScore);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/games-played', async (req, res) => {
  try {
    const count = await prisma.score.count();
    res.json({ gamesPlayed: count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

