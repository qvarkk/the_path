console.log('SCORE IS IN YOU:COMP TYPE')

const results = ['rock', 'paper', 'scissors'];

function computerPlay() {
    const randomResult = Math.floor(Math.random() * results.length);
    return results[randomResult];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        alert('Incorrect input! Try again!');
        return 'input error';
    }
    
    if (computerSelection === 'rock'){
        if (playerSelection === 'rock') {
            console.log("It's a tie!");
            return 'tie';
        } else if (playerSelection === 'paper') {
            console.log("You've won!");
            return 'win';
        } else if (playerSelection === 'scissors') {
            console.log("You've lost!");
            return 'loss';
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            console.log("You've lost!");
            return 'loss';
        } else if (playerSelection === 'paper') {
            console.log("It's a tie!");
            return 'tie';
        } else if (playerSelection === 'scissors') {
            console.log("You've won!");
            return 'win';
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            console.log("You've won!");
            return 'win';
        } else if (playerSelection === 'paper') {
            console.log("You've lost!");
            return 'loss';
        } else if (playerSelection === 'scissors') {
            console.log("It's a tie!");
            return 'tie';
        }
    }
}

let playerScore = 0;
let compScore = 0;
for (let i = 0; i < 1000; i++) {
    let playerSelection = prompt('Enter rock, paper or scissors').toString().toLowerCase();
    let result = playRound(playerSelection, computerPlay());
    if (result === 'win') {
        playerScore++;
        console.log(`Now the score is ${playerScore}:${compScore}`);
    } else if (result === 'loss') {
        compScore++;
        console.log(`Now the score is ${playerScore}:${compScore}`)
    } else if (result === 'input error') {
        console.log('Input error: try again!')
    } else {
        console.log(`Score remains the same ${playerScore}:${compScore}`)
    }

    if (playerScore === 5) {
        console.log("You've won! Refresh the page to play again")
        break;
    } else if (compScore === 5) {
        console.log("You've lost! Refresh the page to play again")
        break;
    }
}