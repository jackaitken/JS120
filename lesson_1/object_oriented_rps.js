const readline = require('readline-sync');

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  playerScore: 0,
  computerScore: 0,

  displayMoves() {
    console.clear();
    console.log(`You chose ${this.human.move}`);
    console.log(`The computer chose ${this.computer.move}`);
  },

  determineGameWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    
    if ((humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper')) {
        return 'player'
      } else if ((humanMove === 'rock' && computerMove === 'paper') ||
      (humanMove === 'paper' && computerMove === 'scissors') ||
      (humanMove === 'scissors' && computerMove === 'rock')) {
        return 'cpu';
      } else {
        return 'tie';
      }
  },

  displayGameWinner() {
    let result = this.determineGameWinner();
    if (result === 'player') {
      console.log('You won that round!');
    } else if (result === 'cpu') {
      console.log('The computer won that round');
    } else {
      console.log('That round was a tie');
    }
  },

  updateScore() {
    let result = this.determineGameWinner();
    if (result === 'player') {
      this.playerScore += 1;
    } else if (result === 'cpu') {
      this.computerScore += 1;
    }
  },

  displayCurrentScore() {
    console.log(`Current Score: You: ${this.playerScore}, CPU: ${this.computerScore}`);
  },

  isGrandWinner() {
    return this.playerScore === 5 || this.computerScore === 5;
  },

  determineGrandWinner() {
    let winner;
    if (this.playerScore === 5) {
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
  },

  displayGoodbyeMessage() {
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
        this.displayGameWinner();
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
  }
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors: ');
        choice = readline.question();
        if (choices.includes(choice)) break;
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
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    }
  }
  return Object.assign(playerObject, computerObject);
}

RPSGame.play();