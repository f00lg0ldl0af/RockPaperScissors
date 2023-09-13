// Declare variables
const choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let playerSelection, computerSelection;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const restartBtn = document.getElementById('restartBtn')


const container = document.querySelector('#container');
const playerChoice = document.createElement('div');
const computerChoice = document.createElement('div');
container.append(playerChoice);
container.append(computerChoice);

const myScore = document.querySelector('#myScore');
const compScore = document.querySelector('#compScore');
const result = document.querySelector('.scores');

const finalResult = document.querySelector('#finalResult');


// Function returns either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice (choices) {
    return choices[Math.floor(Math.random()*(choices.length))];  
}

function updateChoice(button, computerSelect) {
    playerSelection = button;
    computerSelection = computerSelect;

    playerChoice.textContent = `You chose ${button}.`;
    computerChoice.textContent = `Computer chose ${computerSelection}.`; 
}

// Function plays a single round of Rock Paper Scissors and declares winner of the round.

function playRound (playerSelection, computerSelection) {
        
    if (playerSelection === computerSelection) {
        result.textContent = `It's a tie. You chose ${playerSelection}. Computer chose ${computerSelection}.`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock" ) {
        playerScore++;
        result.textContent = `You won. ${playerSelection} beats ${computerSelection}.`; 
    } else {
        computerScore++;
        result.textContent = `You lost. ${computerSelection} beats ${playerSelection}.`; 
    } 
}

function scores() {
    const final = document.querySelector('.scores');
    myScore.textContent = `Your Score: ${playerScore}`;
    compScore.textContent = `Computer Score: ${computerScore}`;
    final.append(myScore,compScore);
}

function displayResult() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            finalResult.textContent = "You won.";
        } else finalResult.textContent = "You lost.";
        disableButtons();
    }
} 

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    myScore.textContent = `Your Score: ${playerScore}`;
    compScore.textContent = `Computer Score: ${computerScore}`;
    result.textContent = "";
    finalResult.textContent = "";
    playerChoice.textContent = "";
    computerChoice.textContent = "";
    ableButtons();
}

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function ableButtons() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

rock.addEventListener('click', () => {
    computerSelection = getComputerChoice(choices);
    updateChoice("Rock",computerSelection);
    playRound(playerSelection, computerSelection);
    scores();
    displayResult();
});

paper.addEventListener('click', () => {
    computerSelection = getComputerChoice(choices);
    updateChoice("Paper",computerSelection);
    playRound(playerSelection, computerSelection);
    scores();
    displayResult();
});

scissors.addEventListener('click', () => {
    computerSelection = getComputerChoice(choices);
    updateChoice("Scissors",computerSelection);
    playRound(playerSelection, computerSelection);
    scores();
    displayResult();

});

restartBtn.addEventListener('click', restartGame)