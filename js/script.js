
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


function playRound(event){
    const computerChoice = getComputerChoice();
    const humanChoice = event.target.id;

    if(humanChoice === computerChoice){
        output.textContent = "draw! same choice as computer.";
        output.style.color = "black";
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        output.textContent = "You lose! paper beats rock.";
        output.style.color = "red";
    }else if(humanChoice == "paper" && computerChoice == "scissor"){
        output.textContent = "You lose! scissor beats paper.";
        output.style.color = "red";
    }else if(humanChoice == "scissor" && computerChoice == "rock"){
        output.textContent = "You lose! rock beats scissor.";
        output.style.color = "red";
    }else if(humanChoice == "rock" && computerChoice == "scissor"){
        output.textContent = "You win! rock beats scissor.";
        output.style.color = "green";
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        output.textContent = "You win! paper beats rock.";
        output.style.color = "green";
    }else{
        output.textContent = "You win! scissor beats paper.";
        output.style.color = "green";
    }
}


const buttons = document.querySelectorAll(".button");

for(let button of buttons){
    button.addEventListener("click", 
        playRound
    );
};

const output = document.createElement("div");
output.className = "output";

const container = document.querySelector(".container");

container.parentNode.appendChild(output);