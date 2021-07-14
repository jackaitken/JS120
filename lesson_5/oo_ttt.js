class Board {
  constructor() {
    // STUB
  }
}

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

class TTTGame {
  constructor() {
    // STUB
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.displayBoard();

      this.firstPlayerMoves();
      if (this.gameOver()) break;

      this.secondPlayerMoves();
      if (this.gameOver()) break;
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

  displayBoard() {
    // STUB
    // Display the board and its current state
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