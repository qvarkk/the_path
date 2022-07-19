// ICANT

const results = ['rock', 'paper', 'scissors']; // Elements for "computer" to loop through 🤯
// "Computer" makes play 😵‍💫
function computerPlay() {
    const randomResult = Math.floor(Math.random() * results.length);
    return results[randomResult];
}

const paraResult = document.querySelector('.moves-log');


// Goes through all possible game results 🤓
function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'rock'){
        if (playerSelection === 'rock') {
            paraResult.innerHTML += `<br>You've chosen ${playerSelection}, but robot decided on ${computerSelection} as well. It's a tie`;
            return 'tie';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML += `<br>Robot selected ${computerSelection}. Good for you, you've beaten it with ${playerSelection}`;
            return 'win';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML += `<br>Robot have beaten your ${playerSelection} with its ${computerSelection}`;
            return 'lose';
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            paraResult.innerHTML += `<br>Robot have beaten your ${playerSelection} with its ${computerSelection}`;
            return 'lose';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML += `<br>You've chosen ${playerSelection}, but robot decided on ${computerSelection} as well. It's a tie`;
            return 'tie';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML += `<br>Robot selected ${computerSelection}. Good for you, you've beaten it with ${playerSelection}`;
            return 'win';
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            paraResult.innerHTML += `<br>Robot selected ${computerSelection}. Good for you, you've beaten it with ${playerSelection}`;
            return 'win';
        } else if (playerSelection === 'paper') {
            paraResult.innerHTML += `<br>Robot have beaten your ${playerSelection} with its ${computerSelection}`;
            return 'lose';
        } else if (playerSelection === 'scissors') {
            paraResult.innerHTML += `<br>You've chosen ${playerSelection}, but robot decided on ${computerSelection} as well. It's a tie`;
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

const healthText = document.querySelector('.health-count');
const roboHealthText = document.querySelector('.robo-health-status1');

let humanHealth = '5';
let compHealth = '5';
let roundCount = 0;

let computerSelection;
let roundResult;

console.log(healthText, roboHealthText);

rockPlayerButton.addEventListener('click', () => {
    computerSelection = computerPlay();
    changeCompButton(computerSelection);
    roundResult = playRound('rock', computerSelection);
     if (roundResult === 'win') {
        compHealth = toString(parseInt(compHealth) - 1);
        roboHealthText.innerHTML = compHealth;
        roundCount++;
     } else if (roundResult === 'lose') {
        humanHealth = toString(parseInt(humanHealth) - 1);
        healthText.innerHTML = humanHealth;
        roundCount++;
     } else {
        roundCount++;
     }
});
paperPlayerButton.addEventListener('click', () => {
    computerSelection = computerPlay();
    changeCompButton(computerSelection);
    playRound('paper', computerSelection);
});
scissorsPlayerButton.addEventListener('click', () => {
    computerSelection = computerPlay();
    changeCompButton(computerSelection);
    playRound('scissors', computerSelection);
});

