const getComputerChoice = function(){
    computerOptions =['rock','paper','scissors'];
    return computerOptions[Math.floor(Math.random()*3)];
}

const playRound = function(playerSelection,computerSelection){
playerSelection = playerSelection.toLowerCase();
if(playerSelection =='paper' && computerSelection == 'rock' || playerSelection =='scissors' && computerSelection == 'paper'|| playerSelection =='rock' && computerSelection == 'scissors'){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
}

else if(computerSelection =='paper' && playerSelection == 'rock' || computerSelection =='scissors' && playerSelection == 'paper'|| computerSelection =='rock' && playerSelection == 'scissors'){
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}
else{
    return `It was a Draw! ${computerSelection} draws ${playerSelection}`
}




}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));