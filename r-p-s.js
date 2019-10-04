import getRandomThrow from './get-random-throw.js';
import { checkResults } from './check-results.js';

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

const makeGuess = () => {
    totalGames++;
    const resultsString = checkResults(userSelectedItem, computerChoice);

    if (resultsString === 'It\'s a tie!') {
        tieGames++;
    }
    else if (resultsString === 'You win!') {
        console.log('win');
        winGames++;
        console.log(winGames);
    }
    else if (resultsString === 'You lost!') {
        loseGames++;
    }
    updateSpans();
};


resultSpan.textContent = getRandomThrow();
updateSpans();
playButton.addEventListener('click', makeGuess);

const RPS = getRandomThrow();
const selectedRadioButton = document.querySelector('input:checked');
const userSelectedItem = selectedRadioButton.value;

const won = 
/*const side = flipCoin();

    coinImage.classList.remove('invisible');
    const src = 'assets/sides/' + side + '.jpg';
    coinImage.src = src;

    const sideButton = document.querySelector('input:checked');


    const won = sideButton.value === side;

    if (won) {
        message.textContent = 'You Won!';
        wins++;
        winCount.textContent = wins;
    }
    else {
        message.textContent = 'You Lost!';
        losses++;
        lossCount.textContent = losses;
    }
});*/
