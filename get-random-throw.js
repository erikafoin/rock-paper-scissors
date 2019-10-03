
/*const rockValue = 0;
const paperValue = 1;
const scissorsValue = 2;*/

function getOneTwoThree(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log(getOneTwoThree(3));
  

  const getRandomThrow = (getOneTwoThree) => {
        if (getOneTwoThree === 0); return 'rock';
    } else {
        (getOneTwoThree === 1) return 'paper';
    } else if {
        (getOneTwoThree === 2) return 'scissors';
    };




export default getRandomThrow;