let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const result_h1 = document.querySelector('.result > h1');
const scoreBoard_div = document.querySelector('score-board');
const rockBtn_btn = document.getElementById("rockps-btn");
const paperBtn_btn = document.getElementById("rpapers-btn");
const scissorBtn_btn = document.getElementById("rpscissor-btn");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(player, computer) {
    playerScore++;
    playerScore_span.innerText = playerScore;
    result_h1.innerText = `You chose ${player} and computer chose ${computer}. You won!`;
}

function lose(player, computer) {
    computerScore++;
    computerScore_span.innerText = computerScore;
    result_h1.innerText = `You chose ${player} and computer chose ${computer}. You lose!`;
}

function draw(player, computer) {
    result_h1.innerText = `You chose ${player} and computer chose ${computer}. It's a draw!`;
}

function game(playerChoice){
    const computerChoice = getComputerChoice();

    switch(playerChoice + computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(playerChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(playerChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(playerChoice, computerChoice);
            break;
    }
}


function main() {
    rockBtn_btn.addEventListener ('click', function() {
        game('rock');
    })

    paperBtn_btn.addEventListener('click', function() {
        game('paper');

    })

    scissorBtn_btn.addEventListener('click', function() {
        game('scissor');

    })
}

main();













































































































/*


let result = " ";
let computerChoiceToStr = " ";
let computerScore = 0;
let playerScore = 0;
let drawScore = 0;
let sumOfRounds = 0;


// let bestOfRounds = rounds();
// getComputerChoice(); 
 




// playRound();


function play(){
alert("Do you want to play?");
let againOrExit = prompt("Yes or No? ");
    if(againOrExit.toLowerCase() === "yes"){
        bestOfRounds = rounds();
    }

    else if(againOrExit.toLowerCase() === "no"){
    alert("Thank you.");   
    } 
    
    
    else if(againOrExit.toLowerCase() !== "yes" && againOrExit.toLowerCase !== "no"){
        alert("Not a valid option. pick yes or no only.");
        playRound();
    }
    return againOrExit; 
}



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
    let rock = document.getElementById("rockps-btn");
    let paper = document.getElementById("rpapers-btn");
    let scissor = document.getElementById("rpscissor-btn");
    const computerChoice = Math.random();

    if(computerChoice <= 1/3){
        computerChoiceToStr = "rock";
        if(rock === "rock"){
            result = "draw";
            console.log("draw");
        }
        else if(rock === "paper"){
            result = "winner";
            console.log("win");
        }
        else if(rock === "scissor"){
            result = "loser";
            console.log("lose");
        }
       
    alert(`"Computer picked ${computerChoiceToStr}. You picked rock. ${result}`); 
    
    }

    else if(computerChoice > 1/3 && computerChoice < 2/3){
        computerChoiceToStr = "paper";
        console.log("PAPER");
        if(paper === "rock"){
            result = "loser";
            console.log("lose");
        }
        else if(paper === "paper"){
            result = "draw";
            console.log("draw");
        }
        else if(paper === "scissor"){
            result = "winner";
            console.log("win");
        }  
    alert(`"Computer picked ${computerChoiceToStr}. You picked paper. ${result}`); 
    }
    else if(computerChoice >= 2/3){
        computerChoiceToStr = "scissor";
        console.log("SCISSOR");
        if(scissor === "rock"){
            result = "winner";
            console.log("win");
        }
        else if(scissor === "paper"){
            result = "Loser";
            console.log("lose");
        }
        else if(scissor === "scissor"){
            result = "Draw";
            console.log("draw");
        }
       
    alert(`"Computer picked ${computerChoiceToStr}. You picked scissor. ${result}`); 
    }
    getComputerChoice();
   
}

/*
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
    let difference = bestOfRounds - computerScore;

    console.log(playerScore);
    console.log(computerScore);
    console.log(drawScore);
    console.log(sumOfRounds);
    if((playerScore + computerScore == bestOfRounds) && computerScore > playerScore) {
        alert("You lose.");
        playerScore = 0;
        computerScore = 0;
        drawScore = 0;
        sumOfRounds = 0;
        playRound();
    }

    else if((playerScore + computerScore == bestOfRounds) && playerScore > computerScore) {
        alert("You win.");
        playerScore = 0;
        computerScore = 0;
        drawScore = 0;
        sumOfRounds = 0;
        playRound();
    }

    
    else if(playerScore == 0 && (difference - computerScore == -1) && (bestOfRounds%2 != 0)){
        alert("You lose.");
        console.log("you lose");
        playerScore = 0;
        computerScore = 0;
        drawScore = 0;
        sumOfRounds = 0;
        playRound();

    }
    else if(playerScore == 0 && (difference - computerScore == -2) && (bestOfRounds%2 == 0)){
        alert("You lose.");
        console.log("you lose");
        playerScore = 0;
        computerScore = 0;
        drawScore = 0;
        sumOfRounds = 0;
        playRound();
    }

    else if(computerScore == 0 && (difference - playerScore == -1) && (bestOfRounds%2 != 0)){
        alert("You win");
        playerScore = 0;
        computerScore = 0;
        drawScore = 0;
        sumOfRounds = 0;
       playRound();

    }
    
    else if(computerScore == 0 && (difference - playerScore == -2) && (bestOfRounds%2 == 0)){
        alert("You win");
        playerScore = 0;
        computerScore = 0;
        drawScore = 0;
        sumOfRounds = 0;
        playRound();
    
    }


    // getComputerChoice();

}


function rounds(){
    let bestOf = parseInt(prompt("How many rounds do you want to play? ")); 
    if(bestOf >= 3 && bestOf <= 20){
        console.log(`Best of ${bestOf} rounds`);
    }
  
    else if(bestOf < 3){
        console.log("Rounds should be greater than or equal to 3.")
        rounds();
    }
    else if(bestOf = bestOf.toString()){
        console.log("not a number try again");
        rounds();
    }  
    
    return bestOf;
     
}


*/








