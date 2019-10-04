
const getOneTwoThree = () => {
    return Math.floor(Math.random() * Math.floor(3));
};

export const getRandomThrow = () => {
    const myRandomNumber = getOneTwoThree();
    if (myRandomNumber === 0)
        return 'rock';
    else if (myRandomNumber === 1)
        return 'paper';
    else if (myRandomNumber === 2)
        return 'scissors';
};

// console.log('identification of rockpaperscissors', getRandomThrow());


