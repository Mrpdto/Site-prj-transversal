const express = require('express');
const router = express.Router();

// Import your controllers
const PlayersController = require('../controllers/PlayersController');
const ScoresController = require('../controllers/ScoresController');

// Player routes
router.get('/players', PlayersController.index); // List all players
router.post('/players', PlayersController.store); // Create a new player
router.get('/players/:id', PlayersController.show); // Fetch a specific player
router.put('/players/:id', PlayersController.update); // Update a specific player
router.delete('/players/:id', PlayersController.delete); // Delete a specific player

// Score routes
router.post('/scores', ScoresController.addScore); // Add a score for a player
router.get('/scores/player/:playerId', ScoresController.getScoresByPlayer); // Get scores by a specific player

module.exports = router;


