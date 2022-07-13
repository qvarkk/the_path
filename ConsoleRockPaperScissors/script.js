const results = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    const randomResult = Math.floor(Math.random() * results.length);
    return results[randomResult];
}

