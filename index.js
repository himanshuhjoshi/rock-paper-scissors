// to get the computer choice
function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3 + 1);
    switch(choice){
        case 1 : return "rock"; 
        case 2 : return "paper"; 
        case 3 : return "scissors";
    }
}

// to get the human choice
function getHumanChoice(){
    return window.prompt("Choose: rock, paper, scissors");
}

// play the round
function playRound(){
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    console.log(computerChoice, humanChoice);


    if(humanChoice == computerChoice) return 'draw'
    else{
        if(humanChoice=="rock" && computerChoice=="scissors") return 'human'
        else if(humanChoice=="paper" && computerChoice=="rock") return 'human'
        else if(humanChoice=="scissors" && computerChoice=="paper") return 'human'
        else  return 'bot';
    }
}

// play a game for 5 rounds
function playGame(){
    // to keep track of the scores
    let humanScore = 0;
    let computerScore = 0;
    let roundNo = 0;

    while(roundNo < 5){
        const wonBy = playRound();
        console.log(wonBy);
        if(wonBy == "human") humanScore++
        else if(wonBy == "bot") computerScore++;
        roundNo++;
    }

    console.log(humanScore, computerScore);

    if(humanScore == computerScore) return "It's A Draw"
    else {
        return (humanScore > computerScore) ? "Human Wins" : "Bot Wins";
    }
}


console.log(playGame());