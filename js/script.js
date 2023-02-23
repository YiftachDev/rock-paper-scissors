let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");


function getComputerChoice() {
    let choice = Math.round(Math.random() * 2);
    if (choice == 0) choice = "rock";
    else if (choice == 1) choice = "paper";
    else choice = "scissors";
    return choice;
}



function checkWin(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log("tie")
        return "tie";
    } else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        console.log("Player choice: " + playerChoice + "\nComputer choice: " + computerChoice);
        playerScore++;
        return true;
    } else if ((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper")) {
        computerScore++;
        console.log("Player choice: " + playerChoice + "\nComputer choice: " + computerChoice);
        return false;
    }
}

function playRound(player) {
    let computerChoice = getComputerChoice();
    let playerChoice = player;
    let winStatus = checkWin(playerChoice, computerChoice);
    if (winStatus == true);
    else if (winStatus == "tie");
    else;
}

function game() {
    // for (let i = 0; i < 5; i++)
    // {
    //     playRound();
    // }
    // if (playerScore > computerScore) {
    //     alert("You Won!");
    // } else if (playerScore < computerScore) {
    //     alert("Computer won!");
    // } else {
    //     alert("It's a tie!");
    // }
}

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));