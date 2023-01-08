const buttons = document.querySelectorAll("button");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const playerRound = document.querySelector(".player-round");
const computerRound = document.querySelector(".computer-round");
const winnerText = document.querySelector("h2");

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
    console.log(playerCount);
  } else if (
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "scissors")
  ) {
    computerRound.textContent = `Round Won:${++computerCount}`;
    console.log(computerCount);
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerSelect = button.id;
    const computerSelect = getComputerChoice();
    playerChoice.textContent = playerSelect.toUpperCase();
    computerChoice.textContent = computerSelect.toUpperCase();
    playRound(playerSelect, computerSelect);
    if (playerCount === 5) {
      winnerText.textContent = "You are the Winner";
      winnerText.style.visibility = "visible";
    } else if (computerCount === 5) {
      winnerText.textContent = "You are the Loser";
      winnerText.style.visibility = "visible";
    }
  });
});
