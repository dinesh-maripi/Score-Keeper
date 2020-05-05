let winScore;
let winScoreNumberField;
let gameOver = false;
let player1;
let player2;

document.body.addEventListener('keypress', (e) => {
    //check if enter/return key is press to start the game
    if (e.keyCode === 13) {
        winScoreNumberField = document.getElementById('win-score');
        winScore = parseInt(winScoreNumberField.value);
        gameOver = false;
        if (winScore > 0) {
            document.getElementById('playing-to').textContent = winScore;
            player1 = prompt(`Enter first player's name...`).substr(0, 3).toUpperCase();
            player2 = prompt(`Enter second player's name...`).substr(0, 3).toUpperCase();
            document.getElementById('player-1').childNodes[0].nodeValue = `${player1} Score:`;
            document.getElementById('player-2').childNodes[0].nodeValue = `${player2} Score:`;
            //clear the input field and outfocus it.
            winScoreNumberField.value = '';
            winScoreNumberField.blur();
        } else {
            alert('Please! Enter some score...')
        }
    }
})


function addScore(event) {
    const scoreField = event.srcElement.id === 'add-btn1' ? 'score-1' : 'score-2';
    let score = parseInt(document.getElementById(`${scoreField}`).textContent);
    if (gameOver) {
        clearFields();
    } else {
        if (score == winScore - 1) {
            gameOver = true;
            document.getElementById(`${scoreField}`).textContent = ++score;
            alert(`${scoreField === 'score-1' ? player1 : player2} is the winner!`);
            clearFields();
        } else if (score < winScore) {
            document.getElementById(`${scoreField}`).textContent = ++score;
        }
    }
}

function playMusic(evnt) {
    const songs = ['d.mp3', 'g.mp3', 'h.mp3', 'n.mp3', 'p.mp3'];
    const song = document.getElementById('music');
    const random = Math.floor(Math.random() * songs.length);
    song.src = `music/${songs[random]}`;
    song.play();
}

function clearFields() {
    document.getElementById('playing-to').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    gameOver = true;
    winScoreNumberField.focus();
}






