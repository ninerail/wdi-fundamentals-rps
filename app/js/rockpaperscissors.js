////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    move || getInput();
    return playerMove;
}

function getComputerMove(move) {
    move || randomPlay();
    return computerMove
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === "rock" && computerMove === "rock") {
        return "tie";
    } else if (playerMove === "rock" && computerMove === "paper") {
        return "computer";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        return "player";
    } else if (playerMove === "paper" && computerMove === "rock") {
        return "player";
    } else if (playerMove === "paper" && computerMove === "paper") {
        return "tie";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        return "computer";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        return "computer";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        return "player";
    } else if (playerMove === "scissors" && computerMove === "scissors") {
        return "tie";
    };
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (i = 0; i < 5; i++) {
    	//Play one round of the game here//
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently player: ' + playerWins + ' to computer: ' + computerWins + '\n');
    }
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (i = 0; i < x; i++) {
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently player: ' + playerWins + ' to computer: ' + computerWins + '\n');
    }
}
