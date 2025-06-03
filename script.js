function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return randomNumber === 0 ? 'rock' : randomNumber === 1 ? 'paper' : 'scissors';
}

let result = document.querySelector('.result');
let humanScore = 0, computerScore = 0;

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const winningCombinations = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (winningCombinations[humanChoice] === computerChoice) {
        humanScore++;
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
        result.textContent = `It's a tie! You both chose ${humanChoice}`;
    } else {
        computerScore++;
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    updateScore();
}

function updateScore() {
    const scoreDisplay = document.querySelector('.score');
    scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
        result.textContent = "Congratulations! You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        result.textContent = "Sorry! The computer won the game!";
        disableButtons();
    }
}

function disableButtons() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

// Adding event listeners for buttons
document.querySelector("#rock").addEventListener("click", () => playRound('rock'));
document.querySelector("#paper").addEventListener("click", () => playRound('paper'));
document.querySelector("#scissors").addEventListener("click", () => playRound('scissors'));
