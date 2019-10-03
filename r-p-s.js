import getRandomThrow from './get-random-throw.js';

const playButton = document.getElementById('play-button');
const resultSpan = document.getElementById('result');
const totalSpan = document.getElementById('total');
const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const tiesSpan = document.getElementById('ties');

let totalGames = 0;
let tieGames = 0;
let winGames = 0;
let loseGames = 0;

const updateSpans = () => {
    totalSpan.textContent = totalGames;
    winsSpan.textContent = winGames;
    lossesSpan.textContent = loseGames;
    tiesSpan.textContent = tieGames;
};

const computerChoice = getRandomThrow();
const determineWinner = (userSelectedItem, computerChoice) => {
    if (userSelectedItem === 'rock' && computerChoice === 'rock')
        return 'It\'s a tie!';
    else if (userSelectedItem === 'rock' && computerChoice === 'paper')
        return 'You lose!';   
    else if (userSelectedItem === 'rock' && computerChoice === 'scissors')
        return 'You win!'; 
    else if (userSelectedItem === 'paper' && computerChoice === 'rock')
        return 'You win!'; 
    else if (userSelectedItem === 'paper' && computerChoice === 'paper')
        return 'It\'s a tie!';
    else if (userSelectedItem === 'paper' && computerChoice === 'scissors')
        return 'You lose!';  
    else if (userSelectedItem === 'scissors' && computerChoice === 'rock')
        return 'You lose!'; 
    else if (userSelectedItem === 'scissors' && computerChoice === 'paper')
        return 'You win!'; 
    else if (userSelectedItem === 'scissors' && computerChoice === 'scissors')
        return 'It\'s a tie!';   
};
console.log(determineWinner());

const makeGuess = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelectedItem = selectedRadioButton.nodeValue;
    totalGames++;

   
    const won = userWon(userSelectedItem, computerChoice);
    const tie = userTied(userSelectedItem,computerChoice);
    const lose = userLost(userSelectedItem, computerChoice);

    const updateGames = () => {
        if (won)
            winGames++;
        else if (tied) 
            tieGames++;
        else if (lose) 
            loseGames++;
    };

    resultSpan.textContent = getRandomThrow;
    
    updateSpans();


    playButton.addEventListener('click', makeGuess);
}