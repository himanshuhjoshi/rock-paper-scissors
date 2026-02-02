const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");

let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        humanChoice = e.target.value;
        playGame();
    })
});

// to get the computer choice
function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3 + 1);
    switch(choice){
        case 1 : return "rock"; 
        case 2 : return "paper"; 
        case 3 : return "scissors";
    }
}

// play the round
function playRound(humanChoice){
    const computerChoice = getComputerChoice();

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

    const wonBy = playRound(humanChoice);
    
    if(wonBy == "human") humanScore++
    else if(wonBy == "bot") computerScore++;

    result.textContent = `Human: ${humanScore} Computer: ${computerScore}`
    
    if(humanScore === 5) result.textContent = "Humans Won!!!";
    if(computerScore === 5) result.textContent = "Computer Won!!!";
}