class Square {
  constructor() {
    // STUB
  }
}

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

class Board {
  constructor() {
    this.squares = {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log("  O  |     |  O");
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log("     |  X  |");
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log("  X  |     |");
    console.log("     |     |");
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