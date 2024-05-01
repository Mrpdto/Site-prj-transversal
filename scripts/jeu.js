document.addEventListener('DOMContentLoaded', function() {
    const statsDiv = document.getElementById('game-stats');

    fetch('http://localhost:3000/game-stats')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            statsDiv.innerHTML = '';

            statsDiv.innerHTML = `
                <div class="stat"><p class="titre-stat">Total de joueurs :</p><p class="chiffre-stat">${data.totalPlayers}</p></div>
                <div class="stat"><p class="titre-stat">Score total :</p><p class="chiffre-stat">${data.totalScore}</p></div>
                <div class="stat"><p class="titre-stat">Nombre de parties jouées :</p><p class="chiffre-stat">${data.gamesPlayed}</p></div>
            `;
        })
        .catch(error => {
            console.error('Error fetching game stats:', error);
            statsDiv.innerHTML = 'Failed to load game data.';
        });
});

