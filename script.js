// Store available choices in an array
const choices = [1, 2, 3, 4, 5];

// Object to track scores
const score = {
  player: 0,
  computer: 0
};

const turnDisplay = document.getElementById("turn");
const scoreDisplay = document.getElementById("score");
const resultDisplay = document.getElementById("result");

let currentTurn = "Player";

function playRound(playerGuess) {
  // Show player's turn
  currentTurn = "Player";
  turnDisplay.textContent = `Turn: ${currentTurn}`;

  // Computer chooses a random number from the array
  currentTurn = "Computer";
  turnDisplay.textContent = `Turn: ${currentTurn}`;

  const computerNumber =
    choices[Math.floor(Math.random() * choices.length)];

  // Decide winner using if/else conditionals
  if (playerGuess === computerNumber) {
    score.player++;
    resultDisplay.textContent =
      `🎉 Correct! Computer chose ${computerNumber}. You win this round!`;
  } else {
    score.computer++;
    resultDisplay.textContent =
      `❌ Wrong! Computer chose ${computerNumber}. Computer wins this round!`;
  }

  // Update score display
  scoreDisplay.textContent =
    `Player: ${score.player} | Computer: ${score.computer}`;

  // Set turn back to player
  currentTurn = "Player";
  turnDisplay.textContent = `Turn: ${currentTurn}`;
}