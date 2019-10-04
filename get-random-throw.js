
export const getRandomThrow = () => {
    let myRandomNumber = (Math.floor(Math.random() * 3));
    if (myRandomNumber === 0)
        return 'rock';
    else if (myRandomNumber === 1)
        return 'paper';
    else if (myRandomNumber === 2)
        return 'scissors';
};




