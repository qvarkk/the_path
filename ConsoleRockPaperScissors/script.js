const results = ['rock', 'paper', 'scissors']; // Elements for "computer" to loop through 🤯
const paraScore = document.querySelector('.show_score');
const paraResult = document.querySelector('.show_result');
const paraGameResult = document.querySelector('.game_result');

paraResult.innerHTML = 'Press a button to choose an element and start a game!'

// "Computer" makes play 😵‍💫
function computerPlay() {
    const randomResult = Math.floor(Math.random() * results.length);
    return results[randomResult];
}

// Goes through all possible game results 🤓
function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'rock'){
        if (playerSelection === 'rock') {
            paraResult.innerHTML = `You've chosen <span class="selection">${playerSelection}</span>. Computer choise was <span class="selection">${computerSelection}</span>. It's a tie in this round!`;
            return 'tie';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML = `You've chosen <span class="selection">${playerSelection}</span>. Computer choise was <span class="selection">${computerSelection}</span>. You've won this round!`;
            return 'win';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML = `You've chosen <span class="selection">${playerSelection}</span>. Computer choise was <span class="selection">${computerSelection}</span>. You've lost this round!`;
            return 'lose';
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            paraResult.innerHTML = `You've chosen <span class="selection">${playerSelection}</span>. Computer choise was <span class="selection">${computerSelection}</span>. You've lost this round!`;
            return 'lose';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML = `You've chosen <span class="selection">${playerSelection}</span>. Computer choise was <span class="selection">${computerSelection}</span>. It's a tie in this round!`;
            return 'tie';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML = `You've chosen <span class="selection">${playerSelection}</span>. Computer choise was <span class="selection">${computerSelection}</span>. You've won this round!`;
            return 'win';
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            paraResult.innerHTML = `You've chosen <span class="selection">${playerSelection}</span>. Computer choise was <span class="selection">${computerSelection}</span>. You've won this round!`;
            return 'win';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML = `You've chosen <span class="selection">${playerSelection}</span>. Computer choise was <span class="selection">${computerSelection}</span>. You've lost this round!`;
            return 'lose';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML = `You've chosen <span class="selection">${playerSelection}</span>. Computer choise was <span class="selection">${computerSelection}</span>. It's a tie in this round!`;
            return 'tie';
        }
    }
}

// 
// // Loops for 1000 times (basically plays 1000 games) and breaks if one side wins 🥳
// for (let i = 0; i < 1000; i++) {
//     let playerSelection;
//     // If user closes the prompt instead of throwing an error it will break out of game loop 😉
//     try {
//         playerSelection = prompt('Enter rock, paper or scissors').toString().toLowerCase();
//     }
//     catch (TypeError) {
//         console.log('Refresh the page if you want to play again');
//         break;
//     }

//     let result = playRound(playerSelection, computerPlay());
//     if (result === 'win') {
//         playerScore++;
//         console.log(`Now the score is ${playerScore}:${compScore}`);
//     } else if (result === 'loss') {
//         compScore++;
//         console.log(`Now the score is ${playerScore}:${compScore}`)
//     } else if (result === 'input error') {
//         console.log('Input error: try again!')
//     } else {
//         console.log(`Score remains the same ${playerScore}:${compScore}`)
//     }

//     if (playerScore === 5) {
//         console.log("You've won! Refresh the page to play again")
//         break;
//     } else if (compScore === 5) {
//         console.log("You've lost! Refresh the page to play again")
//         break;
//     }
// }

const btn_rock = document.querySelector('.rock');
const btn_paper = document.querySelector('.paper');
const btn_scissors = document.querySelector('.scissors');
let playerScore = 0;
let compScore = 0;

const selectRock = () => {
    if (playRound('rock', computerPlay()) === 'win') {
        playerScore += 1;
    } else if (playRound('rock', computerPlay()) === 'lose') {
        compScore += 1;
    }
};
const selectPaper = () => {
    playRound('paper', computerPlay());
};
const selectScissors = () => {
    playRound('scissors', computerPlay());
};

btn_rock.addEventListener('click', selectRock);
btn_paper.addEventListener('click', selectPaper);
btn_scissors.addEventListener('click', selectScissors);