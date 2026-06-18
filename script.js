const choices = [1, 2, 3, 4, 5];

let score = {
  player: 0,
  computer: 0
};

let gameActive = false;
const winningScore = 10;

const statusText = document.getElementById("statusText");
const scoreText = document.getElementById("scoreText");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

function startGame() {
  gameActive = true;
  score.player = 0;
  score.computer = 0;

  statusText.textContent = "Game Started! First to 10 wins";
  result.textContent = "Make your guess!";
  updateScore();

  startBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
}

function restartGame() {
  startGame();
}

function playRound(playerGuess) {
  if (!gameActive) {
    result.textContent = "Press Start to begin!";
    return;
  }

  const computerGuess = choices[Math.floor(Math.random() * choices.length)];

  if (playerGuess === computerGuess) {
    score.player++;
    result.textContent = `🎯 You matched ${computerGuess}! You score!`;
  } else {
    score.computer++;
    result.textContent = `💥 Computer picked ${computerGuess}. It scores!`;
  }

  updateScore();
  checkWinner();
}

function updateScore() {
  scoreText.textContent = `Player: ${score.player} | Computer: ${score.computer}`;
}

function checkWinner() {
  if (score.player >= winningScore) {
    endGame("🎉 You Win the Neon Battle!");
  } else if (score.computer >= winningScore) {
    endGame("💀 Computer Wins! Try Again");
  }
}

function endGame(message) {
  gameActive = false;
  statusText.textContent = message;
  result.textContent = "Game Over";

  startBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
}