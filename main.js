// Declare variables


// Function returns either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice () {
    const computerSelection = ['Rock', 'Paper', 'Scissors'];
    return computerSelection[Math.floor(Math.random()*computerSelection.length)];  
}
// console.log(getComputerChoice())

// Function ensures player enters valid characters only
function alphaCharOnly(playerSelection) {
    let letters = /^[a-zA-Z]+$/;
    if(letters.test(playerSelection)) {
        return true;
    } else {
        alert('Invalid input. Please enter alpha characters only.');
        return false;
    }
}
//console.log(alphaCharOnly())

// Function returns player choice. 
function getPlayerChoice() {
    let playerSelection = prompt("Choose Rock, Paper or Scissors!");
    // Given this IF loop, console.log(getPlayerChoice()) returns undefined variable. How do I work around this? 
    
    //if (!alphaCharOnly(playerSelection)){
    //    getPlayerChoice();
    //}; /* Inner function can use outer function's arguments and variables, but outer function cannot use the arguments and variables of the inner function */ 
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

}

//console.log(getPlayerChoice())

// Function plays a single round of Rock Paper Scissors and declares winner of the round.

function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `It's a tie. You chose ${playerSelection}. Computer chose ${computerSelection}.`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ) {
        return `You won. ${playerSelection} beats ${computerSelection}.` 
    } else if (playerSelection === "Rock" && computerSelection === "Paper" ) {
        return `You lost. ${computerSelection} beats ${playerSelection}.` 
    } else if (playerSelection === "Scissors" && computerSelection === "Paper" ) {
        return `You won. ${playerSelection} beats ${computerSelection}.` 
    } else if (playerSelection === "Scissors" && computerSelection === "Rock" ) {
        return `You lost. ${computerSelection} beats ${playerSelection}.` 
    } else if (playerSelection === "Paper" && computerSelection === "Rock" ) {
        return `You won. ${playerSelection} beats ${computerSelection}.` 
    } else if (playerSelection === "Paper" && computerSelection === "Scissors" ) {
        return `You lost. ${computerSelection} beats ${playerSelection}.` 
    }
}

//const playerSelection = "Rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection)) 

// Function plays a 5-round game that keep scores and reports a winner or a loser at the end.
function game() {
    let playerScore =  0;
    let computerScore = 0;

    for (let i = 0; i < 6; i++){
        const playerSelection = getPlayerChoice();
        console.log(playerSelection)

        const computerSelection = getComputerChoice();
        console.log(computerSelection)
        
        const results = playRound(playerSelection,computerSelection);
        console.log(results)

        if (results === `You won. ${playerSelection} beats ${computerSelection}.`) {
            playerScore++;
        } else if (results === `It's a tie. You chose ${playerSelection}. Computer chose ${computerSelection}.`) {
            playerScore;
            computerScore;
        } else {
            computerScore++;
        }
    console.log("Player Score: ", playerScore)
    console.log("Computer Score: ", computerScore)   
    }
    
    if (playerScore > computerScore) {
        return "Player won."
    } else if (playerScore < computerScore) {
        return "Computer won."
    } else {
        "It's a tie."
    }
}
//console.log(game())

