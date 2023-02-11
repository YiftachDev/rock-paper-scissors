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
    if (playerChoice == computerChoice) {
        return "tie";
    } else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        console.log(playerChoice, computerChoice);
        playerScore++;
        return true;
    } else if ((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper")) {
        computerScore++;
        console.log(playerChoice, computerChoice);
        return false;
    }
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    let winStatus = checkWin(playerChoice, computerChoice);
    if (winStatus == true) alert(`Player: ${playerScore}\nComputer: ${computerScore}\nYou won the round!`);
    else if (winStatus == "tie") alert(`Player: ${playerScore}\nComputer: ${computerScore}\nTie!`);
    else alert(`Player: ${playerScore}\nComputer: ${computerScore}\nComputer won the round!`);
}

function game() {
    for (let i = 0; i < 5; i++)
    {
        playRound();
    }
    if (playerScore > computerScore) {
        alert("You Won!");
    } else if (playerScore < computerScore) {
        alert("Computer won!");
    } else {
        alert("It's a tie!");
    }
}

game();