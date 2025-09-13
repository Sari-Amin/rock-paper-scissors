
function getComputerChoice(){

    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice == 0){
        return "rock";
    }
    else if (randomChoice == 1){
        return "paper";
    }
    return "scissor";
}

function getHumanChoice(){

    let humanChoice = prompt("Enter valid Choice: ").toLowerCase();
    
    while ( !(humanChoice === "rock" 
        || humanChoice === "paper"
        || humanChoice === "scissor"))
        {
            humanChoice = prompt("Not valid! please Enter valid Choice: ").toLowerCase();
        }

    return humanChoice;
}


function playGame(){
    
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            console.log("draw! same choice");
        }else if(humanChoice == "rock" && computerChoice == "paper"){
            console.log("You lose! paper beats rock.");
            computerScore += 1;
        }else if(humanChoice == "paper" && computerChoice == "scissor"){
            console.log("You lose! scissor beats paper.");
            computerScore += 1;
        }else if(humanChoice == "scissor" && computerChoice == "rock"){
            console.log("You lose! rock beats scissor.");
            computerScore += 1;
        }else if(humanChoice == "rock" && computerChoice == "scissor"){
            console.log("You win! rock beats scissor.");
            humanScore += 1;
        }else if(humanChoice == "paper" && computerChoice == "rock"){
            console.log("You win! paper beats rock.");
            humanScore += 1;
        }else{
            console.log("You win! scissor beats paper.");
            humanScore += 1;
        }
    }

    for(let i = 0; i < 5; i++){

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore == computerScore){
        console.log("Draw!")
    } else if( humanScore > computerScore){
        console.log("You win the game!")
    }else{
        console.log("Computer wins!")
    }


}

playGame()