'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  // Write code here
  let leftHand = hand1.toLowerCase().trim();
  let rightHand = hand2.toLowerCase().trim();

  // Compares all the combinations of hand1 v hand2 and returns the winner or tie
  // Invalid input returns error message

  if ( leftHand === rightHand ) {
    return("It's a tie!");
  } else if ( leftHand === 'rock' && rightHand === 'paper' ){
    return("Hand two wins!");
  } else if ( leftHand === 'rock' && rightHand === 'scissors' ){
      return("Hand one wins!");
  } else if ( leftHand === 'paper' && rightHand === 'rock' ){
      return("Hand one wins!");
  } else if ( leftHand === 'paper' && rightHand === 'scissors' ){
      return("Hand two wins!");
  } else if ( leftHand === 'scissors' && rightHand === 'paper' ){
      return("Hand one wins!");
  } else if ( leftHand === 'scissors' && rightHand === 'rock' ){
      return("Hand two wins!");
  } else {
      return('Invalid input. Options: Rock, Paper or Scissors');
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
