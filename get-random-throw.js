
const rockValue = 0;
const paperValue = 1;
const scissorsValue = 2;

const getOneTwoThree = () => Math.floor(Math.random() * Math.floor(3));


const getRandomThrow = () => {
    if (getOneTwoThree() === 0) {
        return 'rock';
    } 
};
console.log(getRandomThrow());
 

 

export default getRandomThrow;