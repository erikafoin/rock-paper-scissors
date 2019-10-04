export const checkResults = (userSelectedItem, computerChoice) => {
    if (userSelectedItem === computerChoice) return 'draw';
    else if (userSelectedItem === 'rock' && computerChoice === 'paper') return 'lose';
    else if (userSelectedItem === 'rock' && computerChoice === 'scissors') return 'win';
    else if (userSelectedItem === 'paper' && computerChoice === 'rock') return 'win';
    else if (userSelectedItem === 'paper' && computerChoice === 'scissors') return 'lose';
    else if (userSelectedItem === 'scissors' && computerChoice === 'rock') return 'lose';
    else if (userSelectedItem === 'scissors' && computerChoice === 'paper') return 'win';
};

