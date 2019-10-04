export const checkResults = (userSelectedItem, computerChoice) => {
    if (userSelectedItem === computerChoice) return 'It\'s a tie!';
    else if (userSelectedItem === 'rock' && computerChoice === 'paper') return 'You lose!';
    else if (userSelectedItem === 'rock' && computerChoice === 'scissors') return 'You win!';
    else if (userSelectedItem === 'paper' && computerChoice === 'rock') return 'You win!';
    else if (userSelectedItem === 'paper' && computerChoice === 'scissors') return 'You lose!';
    else if (userSelectedItem === 'scissors' && computerChoice === 'rock') return 'You lose!';
    else if (userSelectedItem === 'scissors' && computerChoice === 'paper') return 'You win!';
};
