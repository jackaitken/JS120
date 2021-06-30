const readline = require('readline-sync');

const RPSGame = {
o  human: createHuman(),
  computer: createComputer(),

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    console.log(`You chose ${humanMove}`);
    console.log(`The computer chose ${computerMove}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper')) {
        console.log('You win!');
      } else if ((humanMove === 'rock' && computerMove === 'paper') ||
      (humanMove === 'paper' && computerMove === 'scissors') ||
      (humanMove === 'scissors' && computerMove === 'rock')) {
        console.log('Computer wins!');
      } else {
        console.log("It's a tie");
      }
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
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

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
      let choice,

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

RPSGame.play();