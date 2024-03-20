
function chooseOption(userChoice) {
    // Display user's choice
    document.getElementById('user-choice').src = `./asset/${userChoice}.png`;
}

function playGame() {
    // Generate random choice for CPU
    const choices = ['rock', 'paper', 'scissors'];
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];

    // Display CPU's choice
    document.getElementById('cpu-choice').src = `./asset/${cpuChoice}2.png`;

    // Get user's choice
    const userChoice = document.getElementById('user-choice').src.split('/').pop().split('.')[0];
    document.getElementById('user-choice').classList.add('shake');
    document.getElementById('cpu-choice').classList.add('shake');

    setTimeout(() => {
        document.getElementById('user-choice').classList.remove('shake');
        document.getElementById('cpu-choice').classList.remove('shake');
    }, 300);

    determineWinner(userChoice, cpuChoice);
}

function determineWinner(userChoice, cpuChoice) {
let result = '';

if ((userChoice === 'rock' && cpuChoice === 'scissors') ||
(userChoice === 'scissors' && cpuChoice === 'paper') ||
(userChoice === 'paper' && cpuChoice === 'rock')) {
result = 'You win!';
} else if ((userChoice === 'rock' && cpuChoice === 'paper') ||
(userChoice === 'scissors' && cpuChoice === 'rock') ||
(userChoice === 'paper' && cpuChoice === 'scissors')) {
result = 'You lose!';
} else {
result = 'It\'s a tie!';
}

const displayElement = document.getElementById('display');
displayElement.innerText = result;
displayElement.classList.add('fade-in');

setTimeout(() => {
displayElement.classList.remove('fade-in');
}, 300);
}
