// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { checkResults } from '../check-results.js';

const test = QUnit.test;

test('Returns win for player rock, computer scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'scissors';
    //Act
    // Call the function you're testing and set the result to a const
    const resultCheck = checkResults(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultCheck, 'You win!');
});

test('Returns win for player scissors, computer paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'paper';
    //Act
    // Call the function you're testing and set the result to a const
    const resultCheck = checkResults(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultCheck, 'You win!');
});

test('Returns win for player scissors, computer paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'paper';
    //Act
    // Call the function you're testing and set the result to a const
    const resultCheck = checkResults(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultCheck, 'You win!');
});

test('Returns lose for player rock, computer paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'paper';
    //Act
    // Call the function you're testing and set the result to a const
    const resultCheck = checkResults(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultCheck, 'You lose!');
});

test('Returns lose for player scissors, computer rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'rock';
    //Act
    // Call the function you're testing and set the result to a const
    const resultCheck = checkResults(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultCheck, 'You lose!');
});

test('Returns lose for player rock, computer paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'paper';
    //Act
    // Call the function you're testing and set the result to a const
    const resultCheck = checkResults(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultCheck, 'You lose!');
});
test('Returns draw for player & computer both rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'rock';
    //Act
    // Call the function you're testing and set the result to a const
    const resultCheck = checkResults(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultCheck, 'It\'s a tie!');
});
test('Returns draw for player & computer both paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'paper';
    //Act
    // Call the function you're testing and set the result to a const
    const resultCheck = checkResults(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultCheck, 'It\'s a tie!');
});
test('Returns draw for player & computer both scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'scissors';
    //Act
    // Call the function you're testing and set the result to a const
    const resultCheck = checkResults(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(resultCheck, 'It\'s a tie!');
});
