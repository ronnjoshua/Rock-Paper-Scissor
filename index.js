const playerChoice = prompt("Please pick rock, paper or scissor: ");
getComputerChoice();

function getComputerChoice(){
    const computerChoice = Math.random();
    let result = " ";
    let computerChoiceToStr = " ";
    console.log(computerChoice);
    if(computerChoice <= 1/3){
        computerChoiceToStr = "rock";
        if(playerChoice === "rock"){
            result = "draw";
            console.log("draw")
        }
        else if(playerChoice === "paper"){
            result = "winner";
            console.log("win");
        }
        else if(playerChoice === "scissor"){
            result = "loser";
            console.log("lose");
        }
    }

    else if(computerChoice > 1/3 && computerChoice < 2/3){
        computerChoiceToStr = "paper";
        console.log("PAPER");
        if(playerChoice === "rock"){
            result = "loser";
            console.log("lose")
        }
        else if(playerChoice === "paper"){
            result = "draw";
            console.log("draw");
        }
        else if(playerChoice === "scissor"){
            result = "winner";
            console.log("win");
        }
    }
    else if(computerChoice >= 2/3){
        computerChoiceToStr = "scissor";
        console.log("SCISSOR");
        if(playerChoice === "rock"){
            result = "winner";
            console.log("win")
        }
        else if(playerChoice === "paper"){
            result = "Loser";
            console.log("lose");
        }
        else if(playerChoice === "scissor"){
            result = "Draw";
            console.log("draw");
        }
    }
    alert(`"Computer picked ${computerChoiceToStr}. You picked ${playerChoice}. ${result}`);
}


    


