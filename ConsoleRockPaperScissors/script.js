const results = ['rock', 'paper', 'scissors']; // Elements for "computer" to loop through 🤯
const paraScore = document.querySelector('.show_score');
const paraResult = document.querySelector('.show_result');
const paraGameResult = document.querySelector('.game_result');
const h1 = document.querySelector('.restart');

paraResult.innerHTML = 'Select your element'
paraScore.innerHTML = `0:0`;

// "Computer" makes play 😵‍💫
function computerPlay() {
    const randomResult = Math.floor(Math.random() * results.length);
    return results[randomResult];
}

// Goes through all possible game results 🤓
function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'rock'){
        if (playerSelection === 'rock') {
            paraResult.innerHTML = `You've chosen <br><span class="selection">${playerSelection}</span><br> Computer choise was <br><span class="selection">${computerSelection}</span><br> <span class="res">It's a tie</span>`;
            return 'tie';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML = `You've chosen <br><span class="selection">${playerSelection}</span><br> Computer choise was <br><span class="selection">${computerSelection}</span><br> <span class="res">You've won</span>`;
            return 'win';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML = `You've chosen <br><span class="selection">${playerSelection}</span><br> Computer choise was <br><span class="selection">${computerSelection}</span><br> <span class="res">You've lost</span>`;
            return 'lose';
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            paraResult.innerHTML = `You've chosen <br><span class="selection">${playerSelection}</span><br> Computer choise was <br><span class="selection">${computerSelection}</span><br> <span class="res">You've lost</span>`;
            return 'lose';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML = `You've chosen <br><span class="selection">${playerSelection}</span><br> Computer choise was <br><span class="selection">${computerSelection}</span><br> <span class="res">It's a tie</span>`;
            return 'tie';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML = `You've chosen <br><span class="selection">${playerSelection}</span><br> Computer choise was <br><span class="selection">${computerSelection}</span><br> <span class="res">You've won</span>`;
            return 'win';
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            paraResult.innerHTML = `You've chosen <br><span class="selection">${playerSelection}</span><br> Computer choise was <br><span class="selection">${computerSelection}</span><br> <span class="res">You've won</span>`;
            return 'win';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML = `You've chosen <br><span class="selection">${playerSelection}</span><br> Computer choise was <br><span class="selection">${computerSelection}</span><br> <span class="res">You've lost</span>`;
            return 'lose';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML = `You've chosen <br><span class="selection">${playerSelection}</span><br> Computer choise was <br><span class="selection">${computerSelection}</span><br> <span class="res">It's a tie</span>`;
            return 'tie';
        }
    }
}

const btn_rock = document.querySelector('.rock');
const btn_paper = document.querySelector('.paper');
const btn_scissors = document.querySelector('.scissors');
let playerScore = 0;
let compScore = 0;

const resetScore = () => {
    playerScore = 0;
    compScore = 0;
    paraScore.innerHTML =`${playerScore}:${compScore}`;
    paraResult.innerHTML = `Select your element`

}

const endGame = () => {
    if (playerScore === 5) {
        paraGameResult.innerHTML = `You've won the game! <br> Press any button to start again`;
        playerScore = 0;
        compScore = 0;
    } else if (compScore === 5) {
        paraGameResult.innerHTML = `You've lost the game! <br> Press any button to start again`;
        playerScore = 0;
        compScore = 0;
    } else {
        paraGameResult.innerHTML = ``;
    }
};

const selectRock = () => {
    if (playRound('rock', computerPlay()) === 'win') {
        playerScore += 1;
    } else if (playRound('rock', computerPlay()) === 'lose') {
        compScore += 1;
    }
    paraScore.innerHTML = `${playerScore}:${compScore}`;
    endGame();
};
const selectPaper = () => {
    if (playRound('paper', computerPlay()) === 'win') {
        playerScore += 1;
    } else if (playRound('paper', computerPlay()) === 'lose') {
        compScore += 1;
    }
    paraScore.innerHTML =`${playerScore}:${compScore}`;
    endGame();
};
const selectScissors = () => {
    if (playRound('scissors', computerPlay()) === 'win') {
        playerScore += 1;
    } else if (playRound('scissors', computerPlay()) === 'lose') {
        compScore += 1;
    }
    paraScore.innerHTML = `${playerScore}:${compScore}`;
    endGame();
};

h1.addEventListener('click', resetScore);
btn_rock.addEventListener('click', selectRock);
btn_paper.addEventListener('click', selectPaper);
btn_scissors.addEventListener('click', selectScissors);