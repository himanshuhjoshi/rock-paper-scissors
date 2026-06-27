function getComputerChoice(){
    return Math.round(Math.random() * 2) + 1;
}

function getHumanChoice(){
    return Number(prompt("Enter a value: 1 - Rock, 2 - Paper, 3 - Scissors"));
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    
    for(let i=0; i<5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    function playRound(humanChoice, computerChoice){
        if(humanChoice == computerChoice) return "It's a tie";
        if(humanChoice == 1){
            if(computerChoice==2) computerScore++;
            else humanScore++;
        }
        else if(humanChoice == 2){
            if(computerChoice==1) computerScore++;
            else humanScore++;
        }
        else if(humanChoice == 3){
            if(computerChoice == 1) computerScore++;
            else humanScore++;
        }
    }

    return(humanScore > computerScore) ? "Human Wins!!!" : "Computer Wins!!!"
}

console.log(playGame());