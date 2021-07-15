let readline = require('readline-sync');

class Row {
  constructor() {
    // STUB
  }
}

class Player {
  constructor(marker) {
    this.marker = marker
  }

  getMarker() {
    return this.marker;
  }
}


class Human extends Player {
  constructor() {
    debugger;
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class Square {
  static UNUSED_SQUARE = ' ';
  static HUMAN_MARKER = 'X';
  static COMPUTER_MARKER = 'O';

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker
  }

  setMarker(marker) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let i = 1; i < 10; i++) {
      this.squares[i] = new Square();
    }
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  display() {
    console.log("");
    console.log(`     |     |`);
    console.log(`  ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}`);
    console.log(`     |     |`);
    console.log(`-----+-----+-----`);
    console.log(`     |     |`);
    console.log(`  ${this.squares['4']}  |  ${this.squares['5']}  |  ${this.squares['6']}`);
    console.log(`     |     |`);
    console.log(`-----+-----+-----`);
    console.log(`     |     |`);
    console.log(`  ${this.squares['7']}  |  ${this.squares['8']}  |  ${this.squares['9']}`);
    console.log(`     |     |`);
    console.log("");
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      this.board.display();
      if (this.gameOver()) break;

      this.computerMoves();
      this.board.display();
      if (this.gameOver()) break;
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }

  humanMoves() {
    let choice;

    while (true) {
      choice = readline.question('Choose a square between 1 and 9: ');

      let integerValue = Number(choice);
      if (integerValue <= 10 && integerValue >= 1) {
        break;
      }

      console.log("Sorry, that's not a valid choice");
      console.log("");
    }
    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let randKey = Math.floor((Math.random() * 9) + 1);
    this.board.markSquareAt(randKey, this.computer.getMarker());
  }

  displayWelcomeMessage() {
    console.log('Welcome to Tic Tac Toe!');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Tic Tact Toe! Goodbye!');
  }

  displayResults() {
    // STUB
    // Show the results of the game (win, tie, loss)
  }

  gameOver() {
    // STUB
    return false;
  }
}

let game = new TTTGame();
game.play();