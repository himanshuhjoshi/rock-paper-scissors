'use strict';

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    switch(Math.floor(Math.random() * 3) + 1){
        case 1: return 'rock';
        break;
        case 2: return 'paper';
        break;
        case 3: return 'scissor';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const humanChoice = event.target.id;
        switch(humanChoice){
            case 'rock' : playGame('rock', getComputerChoice());
            break;
            case 'paper' : playGame('paper', getComputerChoice());
            break;
            case 'scissor' : playGame('scissor', getComputerChoice());
        }
    })
});

function playGame(humanChoice, computerChoice){

        console.log(humanChoice);
        console.log(computerChoice);

        if(humanChoice == computerChoice) return "It's a tie";

        if(humanChoice == 'rock'){
            if(computerChoice=='paper') computerScore++;
            else humanScore++;
        }
        else if(humanChoice == 'paper'){
            if(computerChoice=='rock') computerScore++;
            else humanScore++;
        }
        else if(humanChoice == 'scissor'){
            if(computerChoice == 'rock') computerScore++;
            else humanScore++;
        }

        console.log(humanChoice, computerChoice);
        console.log(humanScore, computerScore);
        
        if(humanScore == 5){
            result.textContent = "GAME ENDS!!! Human Wins!!!";
        } else if(computerScore == 5){
            result.textContent = "GAME ENDS!!! Computer Wins!!!";
        }

        if(humanScore==5 || computerScore==5){
            humanScore=0;
            computerScore=0;
        }
}    