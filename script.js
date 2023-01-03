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
    console.log(
      `You Won this round! ${playerSelection} beats ${computerSelection}`
    );
    return playerCount++;
  } else if (
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "scissors")
  ) {
    console.log(
      `You Lose this round! ${computerSelection} beats ${playerSelection}`
    );
    return computerCount++;
  } else {
    console.log(
      `You drew this round! ${computerSelection} draws ${playerSelection}`
    );
  }
};

const game = function () {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please choose your weapon");
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  if (playerCount > computerCount) {
    console.log(
      `You are the winner, you won ${playerCount} rounds and computer won ${computerCount} rounds out of 5 rounds`
    );
  } else {
    console.log(
      `You are the loser, you won ${playerCount} rounds and computer won ${computerCount} rounds out of 5 rounds`
    );
  }
};

game();
