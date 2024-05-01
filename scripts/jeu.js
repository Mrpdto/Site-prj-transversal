document.addEventListener('DOMContentLoaded', function() {
    const statsDiv = document.getElementById('game-stats'); // Make sure this ID matches your HTML

    Promise.all([
      fetch('http://localhost:3000/total-players').then(res => res.json()),
      fetch('http://localhost:3000/best-score').then(res => res.json()),
      fetch('http://localhost:3000/games-played').then(res => res.json())
    ]).then(([totalPlayers, bestScore, gamesPlayed]) => {
      statsDiv.innerHTML = `
        <div class="stat"><p class="titre-stat">Total de joueurs :</p><p class="chiffre-stat">${totalPlayers.totalPlayers}</p></div>
        <div class="stat"><p class="titre-stat">Meilleur score :</p><p class="chiffre-stat">${bestScore.points} par ${bestScore.player.name}</p></div>
        <div class="stat"><p class="titre-stat">Nombre de parties jouées :</p><p class="chiffre-stat">${gamesPlayed.gamesPlayed}</p></div>
      `;
    }).catch(error => {
      console.error('Error fetching stats:', error);
      statsDiv.innerHTML = 'Failed to load game data.';
    });
});



