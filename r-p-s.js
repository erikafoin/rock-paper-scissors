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

const selectedRadioButton = document.querySelector('input:checked');
const userSelectedItem = selectedRadioButton.value;

const computerChoice = getRandomThrow();

const makeGuess = () => {
    totalGames++;
    checkResults(userSelectedItem, computerChoice);
    updateSpans();

    if (checkResults(userSelectedItem, computerChoice) === 'It\'s a tie!') {
        tieGames++;
    }
    else if (checkResults(userSelectedItem, computerChoice) === 'You won!') {
        winGames++;
    }
    else if (checkResults(userSelectedItem, computerChoice) === 'You lost!') {
        loseGames++;
    }
    updateSpans();
};


resultSpan.textContent = getRandomThrow();
updateSpans();
playButton.addEventListener('click', makeGuess);
