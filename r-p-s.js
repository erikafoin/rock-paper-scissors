import { getRandomThrow } from './get-random-throw.js';
import { checkResults } from './check-results.js';

const playButton = document.getElementById('play-button');
const resultSpan = document.getElementById('result');
const totalSpan = document.getElementById('total');
const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const tiesSpan = document.getElementById('ties');
const choiceSpan = document.getElementById('choice');

let totalGames = 0;
let result = '';
let tieGames = 0;
let winGames = 0;
let loseGames = 0;

const updateSpans = () => {
    totalSpan.textContent = totalGames;
    winsSpan.textContent = winGames;
    lossesSpan.textContent = loseGames;
    tiesSpan.textContent = tieGames;
};



const makeGuess = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    let userSelectedItem = selectedRadioButton.value;
    choiceSpan.textContent = userSelectedItem;
    totalGames++;
    let computerChoice = getRandomThrow();
    result = checkResults(userSelectedItem, computerChoice);
    resultSpan.textContent = computerChoice;

    if (result === 'draw') {
        tieGames++;
    }
    else if (result === 'win') {
        winGames++;
    }
    else if (result === 'lose') {
        loseGames++;
    }
    updateSpans();
};



//updateSpans();
playButton.addEventListener('click', makeGuess);
