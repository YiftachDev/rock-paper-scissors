let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = Math.round(Math.random() * 2);
    if (choice == 0) choice = "rock";
    else if (choice == 1) choice = "paper";
    else choice = "scissors";
    return choice;
}

function getPlayerChoice() {
    let choice = prompt("Rock Paper or Scissors?");
    return choice.toLocaleLowerCase();
}

function checkWin(playerChoice, computerChoice) {
    if (PlayerChoice == computerChoice) {
        return;
    } else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        playerScore++;
        return true;
    } else if ((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper")) {
        computerScore++;
        return false;
    }
}

function printRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    if (checkWin(playerChoice, computerChoice)) alert(`Player: ${playerScore}\nComputer: ${computerScore}\nYou won the round!`);
    else alert(`Player: ${playerScore}\nComputer: ${computerScore}\nComputer won the round!`)
}