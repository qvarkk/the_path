let nickname = localStorage.getItem('nickname');
let playerName = document.querySelector('.name');
let rockPlayerButton = document.querySelector('.rock');
let paperPlayerButton = document.querySelector('.paper');
let scissorsPlayerButton = document.querySelector('.scissors');
let rockBotButton = document.querySelector('.rock-robot');
let paperBotButton = document.querySelector('.paper-robot');
let scissorsBotButton = document.querySelector('.scissors-robot');

// "Computer" makes play 😵‍💫
const results = ['rock', 'paper', 'scissors']; // Elements for "computer" to loop through 🤯
function computerPlay() {
    const randomResult = Math.floor(Math.random() * results.length);
    return results[randomResult];
}

// Goes through all possible game results 🤓
function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'rock'){
        if (playerSelection === 'rock') {
            paraResult.innerHTML = ``;
            return 'tie';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML = ``;
            return 'win';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML = ``;
            return 'lose';
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            paraResult.innerHTML = ``;
            return 'lose';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML = ``;
            return 'tie';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML = ``;
            return 'win';
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            paraResult.innerHTML = ``;
            return 'win';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML = ``;
            return 'lose';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML = ``;
            return 'tie';
        }
    }
}
