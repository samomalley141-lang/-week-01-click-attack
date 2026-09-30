let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");
//const megaAttackButton = document.getElementById('megaAttackButton');
//const supaAttackButton = document.getElementById("supaAttackButton");
const playerNameInput = document.getElementById("playerName")
const attackValueInput = document.getElementById("attackValue")
const message = document.getElementById("message")

function performAttack(){
  const playerName = playerNameInput.value.trim();
  const attackValue = getAttackValue();

  if(playerName === ""){
    message.innerText = "Please enter your name.";
    return;
  }

  if(attackValue === null){
    return;
  }

  const isCritical = attackValue === 10;
  const damage = calculateDamage(attackValue, isCritical);

  score += damage;
  message.innerText = '$(playerName)caused $(damage)damage.';
  updateDisplay();
}

 //function addFivePoint() {
 //   score += 5;
 //   scoreDisplay.textContent = score;
 //   winGame()
//}

//function addTenPoint(){
// score += 10;
// scoreDisplay.textContent = score;
// winGame()
//}

// TODO: create resetGame()
function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
    title.textContent = "Click Attack"
}

function winGame() {
    if (score >= 17){
        title.textContent = "You Win";
    }

function getAttackValue(){
  const rawValue = attackValueInput.value.trim();

  if (rawValue === "") {
    message.innerText = "Please insert a valid number";
    return null;
  }

  const attackValue = Number(rawValue);

  if (Number.isNaN(attackValue)) {
    message.innerText = "Please enter a valid number.";
    return null;
  }

  if (attackValue < 1 || attackValue > 10) {
    message.innerText = "Choose an attack value from 1 to 10";
    return null;
  }
  return attackValue;
}

}

function calculateDamage(baseDamage, isCritical){
      if(isCritical){
        return baseDamage * 2;
      }
      return baseDamage;
}

function updateDisplay(){
  scoreDisplay.textContent = score;
  winGame();
}

// TODO: connect both functions to buttons
attackButton.addEventListener('click', performAttack);
resetButton.addEventListener('click', resetGame);
//megaAttackButton.addEventListener('click', addFivePoint)
//supaAttackButton.addEventListener('click', addTenPoint)
