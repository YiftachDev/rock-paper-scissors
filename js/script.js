let playerScore = 0;
let computerScore = 0;
let rounds_played = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerScoreDiv = document.querySelector(".player-score");
const computerScoreDiv = document.querySelector(".computerDiv");
const playerScoreId = document.querySelector("#player-score-id");
const computerScoreId = document.querySelector("#computer-score-id");
const title = document.querySelector("#title");
let playerChoice;
playerScoreId.textContent = playerScore;
computerScoreId.textContent = computerScore;

rockBtn.addEventListener("click", () => {
    playerChoice = "rock";
    playRound(playerChoice);
});
paperBtn.addEventListener("click", () => {
    playerChoice = "paper";
    playRound(playerChoice);
});
scissorsBtn.addEventListener("click", () => {
    playerChoice = "scissors";
    playRound(playerChoice);
});

let computerChoice;
function getComputerChoice() {
    let choice = Math.round(Math.random() * 2);
    if (choice == 0) choice = "rock";
    else if (choice == 1) choice = "paper";
    else choice = "scissors";
    computerChoice = choice;
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
    updateGame(winStatus);
    if (playerScore >= 5) {
        title.textContent = "You Won! Next game in 3 seconds";
        setTimeout(endGame, 3000);
    }
    else if (computerScore >= 5) {
        title.textContent = "You Lost! Next game in 3 seconds";
        setTimeout(endGame, 3000);
    }
    rounds_played++;
}

function endGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreId.textContent = playerScore;
    computerScoreId.textContent = computerScore;
    lastComputerChoice.style.cssText = "background-color: white;";
    lastPlayerChoice.style.cssText = "background-color: white;";
    title.textContent = "Rock Paper Scissors";
}

let lastPlayerChoice;
let lastComputerChoice;
function updateGame(status) {
    if (rounds_played > 0) {
        lastComputerChoice.style.cssText = "background-color: white;";
        lastPlayerChoice.style.cssText = "background-color: white;";
    }
    if (status === true) {
        lastPlayerChoice = document.querySelector(`#${playerChoice}`);
        lastPlayerChoice.style.cssText = "background-color: green;";
        lastComputerChoice = document.querySelector(`#${computerChoice}-computer`);
        lastComputerChoice.style.cssText = "background-color: red;";
    } else if (status === false) {
        lastPlayerChoice = document.querySelector(`#${playerChoice}`);
        lastPlayerChoice.style.cssText = "background-color: red;";
        lastComputerChoice = document.querySelector(`#${computerChoice}-computer`);
        lastComputerChoice.style.cssText = "background-color: green;";
    } else if (status === "tie") {
        lastPlayerChoice = document.querySelector(`#${playerChoice}`);
        lastPlayerChoice.style.cssText = "background-color: yellow;";
        lastComputerChoice = document.querySelector(`#${computerChoice}-computer`);
        lastComputerChoice.style.cssText = "background-color: yellow;";
    }


}