
const rockValue = 0;
const paperValue = 1;
const scissorsValue = 2;
  

const getRandomThrow = (getOneTwoThree) => {
        if (getOneTwoThree === 0) return 'rock';
    } else if {
        (getOneTwoThree === 1) return 'paper';
    } else if {
        (getOneTwoThree === 2) return 'scissors';
    };

    const getOneTwoThree = () => Math.floor(Math.random() * Math.floor(3));

    console.log(getOneTwoThree);


export default getRandomThrow;