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
