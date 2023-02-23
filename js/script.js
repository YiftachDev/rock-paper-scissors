let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerScoreDiv = document.querySelector(".player-score");
const computerScoreDiv = document.querySelector(".computerDiv");
const playerScoreId = document.querySelector("#player-score-id");
const computerScoreId = document.querySelector("#computer-score-id");
playerScoreId.textContent = playerScore;
computerScoreId.textContent = computerScore;

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));


function getComputerChoice() {
    let choice = Math.round(Math.random() * 2);
    if (choice == 0) choice = "rock";
    else if (choice == 1) choice = "paper";
    else choice = "scissors";
    return choice;
}


function checkWinRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "tie";
    } else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        playerScore++;
        playerScoreId.textContent = playerScore;
        return true;
    } else if ((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper")) {
        computerScore++;
        computerScoreId.textContent = computerScore;
        return false;
    }
}

function playRound(player) {
    let computerChoice = getComputerChoice();
    let playerChoice = player;
    let winStatus = checkWinRound(playerChoice, computerChoice);
}

