//function randomly selects Rock, Paper, or Scissor from choices array
function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}


//function runs the game of rock paper scissor once
function playRound(playerSelection, computerSelection){

    // Convert playerSelection to match the case of the choices
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (computerSelection === playerSelection) {
        console.log("It is a Tie");
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        console.log("You Win!");
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        console.log("You Win!");
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        console.log("You Win!");
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        console.log("You Lose!");
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        console.log("You Lose!");
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        console.log("You Lose!");
    } else {
        console.log("Invalid input. Please enter Rock, Paper, or Scissors.");
    }    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log("You: " + playerSelection)
console.log( "Computer: " + computerSelection)

//Runs the Game once using parameters
console.log(playRound(playerSelection, computerSelection));

//GOAL: playGame(). play a five round game that keeps score and reports a winner or loser at the end.
//let playerSelection = prompt("Rock, Paper, Scissors?") <-- This stores user input

function playGame(){
    let result = playRound();

}



