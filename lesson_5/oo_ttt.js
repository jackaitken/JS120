class Row {
  constructor() {
    // STUB
  }
}

class Marker {
  constructor() {
    // STUB
  }
}

class Player {
  constructor() {
    // STUB
  }

  mark() {
    // STUB
  }

  play() {
    // STUB
  }
}


class Human extends Player {
  constructor() {
    // STUB
  }
}

class Computer extends Player {
  constructor() {
    // STUB
  }
}

class Square {
  static UNUSED_SQUARE = ' ';
  static HUMAN_MARKER = 'X';
  static COMPUTER_MARKER = 'O';

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker
  }

  toString() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.squares = {
      1: new Square('X'),
      2: new Square(),
      3: new Square(),
      4: new Square(),
      5: new Square(),
      6: new Square('O'),
      7: new Square(),
      8: new Square(),
      9: new Square(),
    }
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
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.firstPlayerMoves();
      if (this.gameOver()) break;

      this.secondPlayerMoves();
      if (this.gameOver()) break;
      break;
    }

    this.displayResults();
    this.displayGoodbyeMessage();
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

  firstPlayerMoves() {
    // STUB
    // the first player makes a move
  }

  secondPlayerMoves() {
    // STUB
    // the second player makes a move
  }

  gameOver() {
    // STUB
    return false;
  }
}

let game = new TTTGame();
game.play();