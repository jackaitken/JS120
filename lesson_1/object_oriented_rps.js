const readline = require('readline-sync');

const winScenariosObj = {
  'rock': ['lizard', 'scissors'],
  'lizard': ['spock', 'paper'],
  'spock': ['scissors', 'rock'],
  'scissors': ['paper', 'lizard'],
  'paper': ['rock', 'spock']
};

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayMoves() {
    console.clear();
    console.log(`You chose ${this.human.move}`);
    console.log(`The computer chose ${this.computer.move}`);
  },

  determineRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if (humanMove === computerMove) {
      return 0;
    } else if (winScenariosObj[humanMove].includes(computerMove)) {
      return 1;
    } else {
      return -1;
    }
  },

  displayRoundWinner() {
    let result = this.determineRoundWinner();
    if (result === 1) {
      console.log('You won that round!');
    } else if (result === -1) {
      console.log('The computer won that round');
    } else {
      console.log('That round was a tie');
    }
  },

  updateScore() {
    let result = this.determineRoundWinner();
    if (result === 1) {
      this.human.score += 1;
    } else if (result === -1) {
      this.computer.score += 1;
    }
  },

  displayCurrentScore() {
    let cpuScore = this.computer.score;
    let humanScore = this.human.score;
    console.log(`Current Score: You: ${humanScore}, CPU: ${cpuScore}`);
  },

  isGrandWinner() {
    return this.human.score === 5 || this.computer.score === 5;
  },

  determineGrandWinner() {
    let winner;
    if (this.human.score === 5) {
      winner = 'You are';
    } else {
      winner = 'The Computer is';
    }
    return this.displayGrandWinner(winner);
  },

  displayGrandWinner(player) {
    console.log(`${player} the Grand Winner!`)
  },

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors');
    console.log('First player to 5 wins will be named Grand Winner!');
    readline.question('Press enter to begin');
    console.clear();
  },

  displayGoodbyeMessage() {
    console.clear();
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  playAgain() {
    console.log('Would you like to play again (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      while (true) {
        this.human.choose();
        this.computer.choose();
        this.displayMoves();
        this.displayRoundWinner();
        this.updateScore();
        this.displayCurrentScore();
        if (this.isGrandWinner()) {
          this.determineGrandWinner();
          break;
        }
      }
      if (!this.playAgain()) {
        break;
      } else {
        console.clear();
      };
    }
    this.displayGoodbyeMessage();
  },
};

// Factory Functions below

function createPlayer() {
  return {
    move: null,
    score: 0,
    choices: ['rock', 'paper', 'scissors', 'spock', 'lizard'],
  }
}

function createHuman() {
  let playerObject = createPlayer();
  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, scissors, lizard, or spock: ');
        choice = readline.question();
        if (playerObject.choices.includes(choice)) break;
        console.log("Sorry. That's an invalid choice");
      }
      this.move = choice;
    },
  }
  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();
  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = playerObject.choices[randomIndex];
    }
  }
  return Object.assign(playerObject, computerObject);
}

RPSGame.play();