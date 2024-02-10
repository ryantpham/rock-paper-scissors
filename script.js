let playerPoints = 0;
let computerPoints = 0;
const choices = ["Rock","Paper","Scissors"];

let win = "You Win!";
let lose = "You Lose!";
let tie = "It is a Tie";

let playerSelection;
let computerSelection;

function game(){
    //runs the game
    //plays 3 rounds
    //console based
    playerSelection = playerChoice();
    computerSelection = getComputerChoice();
    if (playerPoints < 3 && computerPoints < 3){
        if( playRound() == win ){
            playerPoints ++;
            console.log(`You picked: ${playerSelection}, Computer picked: ${computerSelection}`);
            console.log(`Your score: ${playerPoints} Computer score: ${computerPoints}`);
        } else if( playRound() == lose ){
            computerPoints ++;
            console.log(`You picked: ${playerSelection}, Computer picked: ${computerSelection}`);
            console.log(`Your score: ${playerPoints} Computer score: ${computerPoints}`);
        } else if ( playRound() == tie ){
            console.log(`You picked: ${playerSelection}, Computer picked: ${computerSelection}`);
            console.log (`Scores remain the same - Player:Computer ${playerPoints}:${computerPoints}`);
        }
    } else if ( playerPoints > computerPoints ) {
        console.log("You won the game!")
    } else {
        console.log ("You lost the game.")
    }
}

//function randomly selects Rock, Paper, or Scissor from choices array
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}

function playerChoice(){
    //gets input from player
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    return playerSelection
}

//function runs the game of rock paper scissor once
function playRound(){
    // Convert playerSelection to match the case of the choices
    if (computerSelection === playerSelection) {
        return "It is a Tie";
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        return "You Win!";
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        return "You Win!";
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        return "You Win!";
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "You Lose!";
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "You Lose!";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "You Lose!";
    } else {
        return "Invalid input. Please enter Rock, Paper, or Scissors.";
    }    
}

//game();





/*

//Test Code for Computer Choice
playerSelection = "rock";
computerSelection = getComputerChoice();
console.log("You: " + playerSelection)
console.log( "Computer: " + computerSelection)

//Runs the Game once using parameters
console.log(playRound(playerSelection, computerSelection));

*/
