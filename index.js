const computerChoice = Math.random();
let result = " ";
let computerChoiceToStr = " ";

getComputerChoice();
playRound();


function playRound(){
alert("Do you want to play another round?");
let againOrExit = prompt("Yes or No? ");
    while(againOrExit.toLowerCase() === "yes"){
        getComputerChoice(); 
        alert("Do you want to play another round?");
        let againOrExit = prompt("Yes or No? ");
    }
        if(againOrExit.toLowerCase() === "no"){
            alert("Thank you for playing!");
        }
        else if(againOrExit.toLowerCase() !== "yes" || againOrExit.toLowerCase !== "no"){
            alert("Not a valid option. pick yes or no only.")
            playRound();
        }
}

function getComputerChoice(){
    const playerChoice = prompt("Please pick rock, paper or scissor: ");
    console.log(computerChoice);
    if(computerChoice <= 1/3){
        computerChoiceToStr = "rock";
        if(playerChoice.toLowerCase() === "rock"){
            result = "draw";
            console.log("draw")
        }
        else if(playerChoice.toLowerCase() === "paper"){
            result = "winner";
            console.log("win");
        }
        else if(playerChoice.toLowerCase() === "scissor"){
            result = "loser";
            console.log("lose");
        }
        else{
            result = "not a valid option, you lose";
        }
    }

    else if(computerChoice > 1/3 && computerChoice < 2/3){
        computerChoiceToStr = "paper";
        console.log("PAPER");
        if(playerChoice.toLowerCase() === "rock"){
            result = "loser";
            console.log("lose")
        }
        else if(playerChoice.toLowerCase() === "paper"){
            result = "draw";
            console.log("draw");
        }
        else if(playerChoice.toLowerCase() === "scissor"){
            result = "winner";
            console.log("win");
        }
        else{
            result = "not a valid option, you lose";
        }
    }
    else if(computerChoice >= 2/3){
        computerChoiceToStr = "scissor";
        console.log("SCISSOR");
        if(playerChoice.toLowerCase() === "rock"){
            result = "winner";
            console.log("win")
        }
        else if(playerChoice.toLowerCase() === "paper"){
            result = "Loser";
            console.log("lose");
        }
        else if(playerChoice.toLowerCase() === "scissor"){
            result = "Draw";
            console.log("draw");
        }
        else{
            result = "not a valid option, you lose";
        }
    }
    alert(`"Computer picked ${computerChoiceToStr}. You picked ${playerChoice}. ${result}`);
}




