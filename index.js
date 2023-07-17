let result = " ";
let computerChoiceToStr = " ";
let computerScore = 0;
let playerScore = 0;
let drawScore = 0;
let sumOfRounds = 0;

let bestOfRounds = rounds();
getComputerChoice();



function playRound(){
alert("Do you want to play again?");
let againOrExit = prompt("Yes or No? ");
    if(againOrExit.toLowerCase() === "yes"){
        bestOfRounds = rounds();
    }
    else if(againOrExit.toLowerCase() === "no"){
        alert("Thank you for playing, see you again next time!");
    } 
    else if(againOrExit.toLowerCase() !== "yes" && againOrExit.toLowerCase !== "no"){
        alert("Not a valid option. pick yes or no only.");
        playRound();
    }    
    return againOrExit;
}

//Get random choice of computer 

function getComputerChoice(){
    const playerChoice = prompt("Please pick rock, paper or scissor: ");
    const computerChoice = Math.random();
    
    if(computerChoice <= 1/3){
        computerChoiceToStr = "rock";
        if(playerChoice.toLowerCase() === "rock"){
            result = "draw";
            console.log("draw");
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
            console.log("lose");
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
            console.log("win");
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

    if(result.toLowerCase() === "winner"){
        playerScore++;

    }
    else if(result.toLowerCase() === "loser"){
        computerScore++;
    }
    else if(result.toLowerCase() === "draw"){
        drawScore++
    }
    else if(result.toString()){
        computerScore++
    }
    sumOfRounds = playerScore + computerScore;
    console.log(playerScore);
    console.log(computerScore);
    console.log(drawScore);
    console.log(sumOfRounds);
    if(sumOfRounds == bestOfRounds && ((computerScore > playerScore))){
        alert("You lose.");
        playerScore = 0;
        computerScore = 0;
        drawScore = 0;
        sumOfRounds = 0;
        playRound();

    }
    else if(sumOfRounds == bestOfRounds && ((computerScore < playerScore))){
        alert("You win");
        playerScore = 0;
        computerScore = 0;
        drawScore = 0;
        sumOfRounds = 0;
        playRound();

    }
    getComputerChoice();
}


function rounds(){
    let bestOf = parseInt(prompt("How many rounds do you want to play? ")); 
    if(bestOf%2 !=0 && bestOf >= 3){
        console.log(`Best of ${bestOf} rounds`);
    }
    else if(bestOf%2 == 0){
        console.log("Rounds should be greater than 3.")
        rounds();
    }
    else if(bestOf < 3){
        console.log("Rounds should be greater than 3.")
        rounds();
    }
    else if(bestOf = bestOf.toString()){
        console.log("not a number try again");
        rounds();
    }  
    return bestOf;
}

function counter(){
   
    
}






