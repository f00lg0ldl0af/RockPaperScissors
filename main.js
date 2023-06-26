// Return either 'Rock', 'Paper' or 'Scissors'

function getComputerChoice () {
    const computerChoice = ['Rock', 'Paper', 'Scissors'];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];  
}

console.log(getComputerChoice())