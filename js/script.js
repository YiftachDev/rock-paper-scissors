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