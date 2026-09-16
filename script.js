let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");
const megaAttackButton = document.getElementById('megaAttackButton')

// TODO: create addPoint()
function addPoint() {
    score += 1;
    scoreDisplay.textContent = score;
    winGame()
}

function addFivePoint() {
    score += 5;
    scoreDisplay.textContent = score;
    winGame()
}

// TODO: create resetGame()
function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
    title.textContent = "Click Attack"
}

function winGame() {
    if (score >= 12){
        title.textContent = "You Win";
    }

}
// TODO: connect both functions to buttons
attackButton.addEventListener('click', addPoint)
resetButton.addEventListener('click', resetGame)
megaAttackButton.addEventListener('click', addFivePoint)

