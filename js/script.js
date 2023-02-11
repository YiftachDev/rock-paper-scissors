function getComputerChoice() {
    let choice = Math.round(Math.random() * 2);
    if (choice == 0) choice = "Rock";
    else if (choice == 1) choice = "Paper";
    else choice = "Scissors";
    return choice;
}
