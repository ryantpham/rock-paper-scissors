//Point counter
let playerPoints = 0;
let computerPoints = 0;

//global variables (Can be used in any functions)
const choices = ["Rock","Paper","Scissors"];
let win = "You Win!";
let lose = "You Lose!";
let tie = "Tie!";
let playerSelection;
let computerSelection;

//runs the game
//plays 3 rounds
//console based
function game(){
    //runs the game and keeps track with a counter
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

    //Checks if the game should continue as long as the points are below 3
    if ( playerPoints <= 0 && computerPoints <= 0 ){
        game(); //This is a recursive call which the function calls itself if the if statement is satisfied
    } else if (playerPoints > computerPoints) {
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


function playerChoice(x){
    //gets input from player
    let playerSelection = x;
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    return playerSelection
}

//function runs the game of rock paper scissor once
function playRound(){
    if (computerSelection === playerSelection) {
        return "Tie!";
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        playerPoints ++;
        return "You Win!";
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        playerPoints ++;
        return "You Win!";
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        playerPoints ++;
        return "You Win!";
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        computerPoints ++;
        return "You Lose!";
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        computerPoints ++;
        return "You Lose!";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        computerPoints ++;
        return "You Lose!";
    } else {
        return "ERROR!";
    }    
}

//To run the game in the console we call the function:
//game();

//button when clicked on
const pickButton = document.querySelectorAll('button');
const playerDisplay = document.querySelector('.playerDisplay');
const computerDisplay = document.querySelector('.computerDisplay');
const resultDisplay = document.querySelector('.resultDisplay');
const scoreDisplay = document.querySelector('.scoreDisplay');

pickButton.forEach((button) => {
    button.addEventListener('click',()=>{
        //Runs a round of Rock Paper Scissors when clicked
        if (button.classList.contains('rock')){
            const choice = 'rock';
            playerSelection = playerChoice(choice);
        } else if (button.classList.contains('paper')){
            const choice = 'paper';
            playerSelection = playerChoice(choice);
        } else if (button.classList.contains('scissors')){
            const choice = 'scissors';
            playerSelection = playerChoice(choice);
        }

        computerSelection = getComputerChoice();
        result = playRound();

        //emojis for playerSelection
        if(playerSelection === 'Rock'){
            playerSelection ='👊'
        } else if (playerSelection === 'Paper'){
            playerSelection = '✋'
        } else {
            playerSelection = '✌';
        }

        //emojis for computer Selection
        if (computerSelection === 'Rock') {
            computerSelection = '👊';
        } else if (computerSelection === 'Paper') {
            computerSelection = '✋';
        } else {
            computerSelection = '✌️';
        }

        playerDisplay.textContent = `Player Selection: ${playerSelection}`;
        computerDisplay.textContent = `Computer Selection: ${computerSelection}`;
        scoreDisplay.textContent = `Scoreboard: ${playerPoints} - ${computerPoints}`


        //Game status
        if (playerPoints === computerPoints){
            resultDisplay.textContent = `Currently a Draw`
            resultDisplay.style.color = 'hsl(39, 89%, 49%)';
        } else if (playerPoints > computerPoints){
            resultDisplay.textContent = 'You are in the lead!'
            resultDisplay.style.color = '#7FFF94'
        } else {
            resultDisplay.textContent = 'You are losing!'
            resultDisplay.style.color = 'hsl(349, 71%, 52%)'
        }

        //Decides who is the winner
        if (playerPoints === 5){
            playerPoints = 0;
            computerPoints = 0;
            resultDisplay.style.color = '#7FFF94';
            resultDisplay.textContent = `You won the game!`
            playerDisplay.textContent = `Player: Rematch?`;
            computerDisplay.textContent = `Computer: Sure.`;
            scoreDisplay.textContent = `Scoreboard: ${playerPoints} - ${computerPoints}`
        } else if (computerPoints === 5){
            
            playerPoints = 0;
            computerPoints = 0;
            resultDisplay.textContent = `You lost the game!`
            playerDisplay.textContent = `Player: Rematch?`;
            computerDisplay.textContent = `Computer: I'm Game!`;
            scoreDisplay.textContent = `Scoreboard: ${playerPoints} - ${computerPoints}`
        } 
        

    });
});


