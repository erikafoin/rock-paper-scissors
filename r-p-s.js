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
    const resultsString = checkResults(userSelectedItem, computerChoice);

    if (resultsString === 'draw') {
        tieGames++;
    }
    else if (resultsString === 'win') {
        console.log('win');
        winGames++;
        console.log(winGames);
    }
    else if (resultsString === 'lose') {
        loseGames++;
    }
    updateSpans();
};


resultSpan.textContent = getRandomThrow();
updateSpans();
playButton.addEventListener('click', makeGuess);
