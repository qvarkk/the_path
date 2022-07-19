const paraResult = document.querySelector('.moves-log');

const results = ['rock', 'paper', 'scissors']; // Elements for "computer" to loop through 🤯
// "Computer" makes play 😵‍💫
function computerPlay() {
    const randomResult = Math.floor(Math.random() * results.length);
    return results[randomResult];
}

// Goes through all possible game results 🤓
function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'rock'){
        if (playerSelection === 'rock') {
            paraResult.innerHTML += `<br>${computerSelection}:${playerSelection}`;
            return 'tie';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML += `<br>${computerSelection}:${playerSelection}`;
            return 'win';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML += `<br>${computerSelection}:${playerSelection}`;
            return 'lose';
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            paraResult.innerHTML += `<br>${computerSelection}:${playerSelection}`;
            return 'lose';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML += `<br>${computerSelection}:${playerSelection}`;
            return 'tie';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML += `<br>${computerSelection}:${playerSelection}`;
            return 'win';
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            paraResult.innerHTML += `<br>${computerSelection}:${playerSelection}`;
            return 'win';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML += `<br>${computerSelection}:${playerSelection}`;
            return 'lose';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML += `<br>${computerSelection}:${playerSelection}`;
            return 'tie';
        }
    }
}

const nickname = localStorage.getItem('nickname').toUpperCase();
const playerName = document.querySelectorAll('.name');

// Changes name fields to the value given in start page
if (nickname !== '') {
    playerName.forEach((name) => {
        name.innerText = nickname;
    });
}

const rockPlayerButton = document.querySelector('.rock');
const paperPlayerButton = document.querySelector('.paper');
const scissorsPlayerButton = document.querySelector('.scissors');

const rockBotButton = document.querySelector('.rock-robot');
const paperBotButton = document.querySelector('.paper-robot');
const scissorsBotButton = document.querySelector('.scissors-robot');

const changeCompButton = (computerSelection) => {
    if (computerSelection === 'rock') {
        rockBotButton.focus();
        rockBotButton.click();
    } else if (computerSelection === 'paper') {
        paperBotButton.focus();
        paperBotButton.click();
    } else if (computerSelection === 'scissors') {
        scissorsBotButton.focus();
        scissorsBotButton.click();
    }
};

let computerSelection;
rockPlayerButton.addEventListener('click', () => {
    computerSelection = computerPlay();
    console.log(computerSelection);
    changeCompButton(computerSelection);
    playRound('rock', computerSelection);
});
paperPlayerButton.addEventListener('click', () => {
    computerSelection = computerPlay();
    console.log(computerSelection);
    changeCompButton(computerSelection);
    playRound('paper', computerSelection);
});
scissorsPlayerButton.addEventListener('click', () => {
    computerSelection = computerPlay();
    console.log(computerSelection);
    changeCompButton(computerSelection);
    playRound('scissors', computerSelection);
});

