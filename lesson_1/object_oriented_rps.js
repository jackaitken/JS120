const readline = require('readline-sync');

const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    this.displayGoodbyeMessage();
  },
};

function createPlayer(playerType) {
  return {
    // player's name?
    // player's current move
    playerType,
    move: null,

    choose() {
      if (this.isHuman()) {
        const choices = ['rock', 'paper', 'scissors'];
        let choice;

        while (true) {
          console.log('Please choose rock, paper, or scissors: ');
          choice = readline.question();
          if (choices.includes(choice)) break;
          console.log("Sorry. That's an invalid choice");
        }

        this.move = choice;
      } else {
        let randomIndex = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIndex];
      }
    },

    isHuman() {
      return this.playerType === 'human';
    }
  };
}

function createMove() {
  return {
    // (possible state: type of move (rock, paper, scissors))
  };
}

function createRule() {
  return {
    // (possible state: unsure if Rules need state)
  };
}

function compare(move1, move2) {
  // to implement
}

