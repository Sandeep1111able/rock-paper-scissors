const buttons = document.querySelectorAll(".btn");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const playerRound = document.querySelector(".player-round");
const computerRound = document.querySelector(".computer-round");
const winnerText = document.querySelector("h2");
const resetBtn = document.querySelector("#reset");

const getComputerChoice = function () {
  computerOptions = ["rock", "paper", "scissors"];
  return computerOptions[Math.floor(Math.random() * 3)];
};

let playerCount = 0;
let computerCount = 0;

const playRound = function (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors")
  ) {
    playerRound.textContent = `Round Won:${++playerCount}`;
  } else if (
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "scissors")
  ) {
    computerRound.textContent = `Round Won:${++computerCount}`;
  }
};

const gameComplete = function () {
  winnerText.style.visibility = "visible";
  buttons.forEach((button) => (button.disabled = true));
  resetBtn.style.visibility = "visible";
  resetBtn.disabled = false;
};

const reset = function () {
  console.log("HELLO");
  winnerText.style.visibility = "hidden";
  buttons.forEach((button) => (button.disabled = false));
  resetBtn.style.visibility = "hidden";
  playerCount = 0;
  computerCount = 0;
  playerChoice.textContent = "";
  computerChoice.textContent = "";
  playerRound.textContent = "Round Won:";
  computerRound.textContent = "Round Won:";
};

resetBtn.addEventListener("click", () => reset());

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelect = button.id;
    const computerSelect = getComputerChoice();
    playerChoice.textContent = playerSelect.toUpperCase();
    computerChoice.textContent = computerSelect.toUpperCase();
    playRound(playerSelect, computerSelect);
    if (playerCount === 5) {
      winnerText.textContent = "You are the Winner";
      gameComplete();
    } else if (computerCount === 5) {
      winnerText.textContent = "You are the Loser";
      gameComplete();
    }
  });
});
