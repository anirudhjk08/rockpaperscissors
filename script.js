function getComputerChoice(){

    const randomNumber = Math.floor(Math.random()*3);

    if( randomNumber === 0){
        return 'rock';
    }

    else if( randomNumber === 1){
        return 'paper';
    }

    else { 
    return 'scissors';
    }

}
console.log( getComputerChoice() );

function getHumanChoice(){
    let choice = prompt("Rock, paper or scissors:");
    return choice;
}
console.log(getComputerChoice());

let humanScore = 0, computerScore = 0;

function playRound(humanChoice,computerChoice){

    humanChoice = humanChoice.toLowerCase();

    const winningCombinations = {
        rock : 'scissors',
        paper : 'rock',
        scissors : 'paper'
    };
    if(winningCombinations[humanChoice] === computerChoice){
        humanScore++;
        
    }
    else if(humanChoice === computerChoice){
        humanScore=humanScore;
        computerScore=computerScore;    
    }
    else {
        computerScore++;
    }

}

function playGame(){

for( let i = 0; i<5; i ++){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
    console.log('-------------------------');
}
if(humanScore > computerScore){
    console.log(`You win the game! Final score: You ${humanScore} - ${computerScore} Computer`);
}
else if(humanScore < computerScore){
    console.log(`You lose the game! Final score: You ${humanScore} - ${computerScore} Computer`);
}
else {
    console.log(`The game is a draw! Final score: You ${humanScore} - ${computerScore} Computer`);
}
}
playGame();