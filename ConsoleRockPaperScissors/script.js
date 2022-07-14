alert('Open console by pressing F12 to play the game (you may need to refresh the page). You can quit by pressing Esc');

console.log('SCORE IS IN YOU:COMP TYPE');

const results = ['rock', 'paper', 'scissors']; // Elements for "computer" to loop through 🤯

// "Computer" makes play 😵‍💫
function computerPlay() {
    const randomResult = Math.floor(Math.random() * results.length);
    return results[randomResult];
}

// Goes through all possible game results 🤓
function playRound(playerSelection, computerSelection) {
    // In case of wrong input 🙄
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        alert('Incorrect input! Try again!');
        return 'input error';
    }
    
    if (computerSelection === 'rock'){
        if (playerSelection === 'rock') {
            console.log(`You've chosen ${playerSelection}. Computer choise was ${computerSelection}. It's a tie in this round!`);
            return 'tie';
        } else if (playerSelection === 'paper') {
            console.log(`You've chosen ${playerSelection}. Computer choise was ${computerSelection}. You've won this round!`);
            return 'win';
        } else if (playerSelection === 'scissors') {
            console.log(`You've chosen ${playerSelection}. Computer choise was ${computerSelection}. You've lost this round!`);
            return 'loss';
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            console.log(`You've chosen ${playerSelection}. Computer choise was ${computerSelection}. You've lost this round!`);
            return 'loss';
        } else if (playerSelection === 'paper') {
            console.log(`You've chosen ${playerSelection}. Computer choise was ${computerSelection}. It's a tie in this round!`);
            return 'tie';
        } else if (playerSelection === 'scissors') {
            console.log(`You've chosen ${playerSelection}. Computer choise was ${computerSelection}. You've won this round!`);
            return 'win';
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            console.log(`You've chosen ${playerSelection}. Computer choise was ${computerSelection}. You've won this round!`);
            return 'win';
        } else if (playerSelection === 'paper') {
            console.log(`You've chosen ${playerSelection}. Computer choise was ${computerSelection}. You've lost this round!`);
            return 'loss';
        } else if (playerSelection === 'scissors') {
            console.log(`You've chosen ${playerSelection}. Computer choise was ${computerSelection}. It's a tie in this round!`);
            return 'tie';
        }
    }
}

let playerScore = 0;
let compScore = 0;
// Loops for 1000 times (basically plays 1000 games) and breaks if one side wins 🥳
for (let i = 0; i < 1000; i++) {
    let playerSelection;
    // If user closes the prompt instead of throwing an error it will break out of game loop 😉
    try {
        playerSelection = prompt('Enter rock, paper or scissors').toString().toLowerCase();
    }
    catch (TypeError) {
        console.log('Refresh the page if you want to play again');
        break;
    }

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