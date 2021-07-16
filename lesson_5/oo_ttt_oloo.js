let readline = require('readline-sync');

let PlayerPrototype = {
  inititialize(marker) {
    this.marker = marker;
    return this;
  },

  getMarker() {
    return this.marker;
  }
}

let Human = Object.create(PlayerPrototype);

Human.init = function() {
  return this.inititialize(Square.HUMAN_MARKER);
}

let Computer = Object.create(PlayerPrototype);

Computer.init = function() {
  return this.inititialize(Square.COMPUTER_MARKER);
}

let Square = {
  UNUSED_SQUARE: ' ',
  HUMAN_MARKER: 'X',
  COMPUTER_MARKER: 'O',

  init(marker) {
    this.marker = marker || this.UNUSED_SQUARE;
    return this;
  },

  setMarker(marker) {
    this.marker = marker;
  },
  
  getMarker() {
    return this.marker;
  },
  
  toString() {
    return this.marker;
  },
  
  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  },
}

let Board = {
  init() {
    this.squares = {};
    for (let i = 1; i < 10; i++) {
      this.squares[i] = Object.create(Square).init();
    }
    return this;
  },

  displayWithClear() {
    console.clear();
    console.log('');
    console.log('');
    this.display()
  },

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  },

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  },

  boardIsFull() {
    return this.unusedSquares().length === 0;
  },

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });
    return markers.length;
  },

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
  },
}

let TTTGame = {
  POSSIBLE_WINNING_ROWS: [
    [ "1", "2", "3" ],
    [ "4", "5", "6" ],
    [ "7", "8", "9" ],
    [ "1", "4", "7" ],
    [ "2", "5", "8" ],
    [ "3", "6", "9" ],
    [ "1", "5", "9" ],
    [ "3", "5", "7" ],  
  ],

  init() {
    this.board = Object.create(Board).init();
    this.human = Object.create(Human).init();
    this.computer = Object.create(Computer).init();
    return this;
  },

  play() {
    this.displayWelcomeMessage();

    this.board.display();
    while (true) {
      this.humanMoves();
      if (this.gameOver()) break;
  
      this.computerMoves();
      if (this.gameOver()) break;
  
      this.board.displayWithClear();
    }
  
    this.board.displayWithClear();
    this.displayResults();
    this.displayGoodbyeMessage();
  },

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      let prompt = `Choose a square (${validChoices.join(', ')}): `;
      choice = readline.question(prompt);
  
      if (validChoices.includes(choice)) break;
  
      console.log("Sorry, that's not a valid choice");
      console.log("");
    }
    this.board.markSquareAt(choice, this.human.getMarker());
  },

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;
  
    do {
      choice = Math.floor((Math.random() * 9) + 1).toString();
    } while (!validChoices.includes(choice));
  
    this.board.markSquareAt(choice, this.computer.getMarker());
  },

  displayWelcomeMessage() {
    console.clear();
    console.log('Welcome to Tic Tac Toe!');
    console.log('');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Tic Tac Toe! Goodbye!');
  },

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log('You won! Congratulations!');
    } else if (this.isWinner(this.computer)) {
      console.log(('The computer won'));
    } else {
      console.log('The game ended in a tie');
    }
  },

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  },

  gameOver() {
    return this.board.boardIsFull() || this.someoneWon();
  },

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }
}

let game = Object.create(TTTGame).init();
game.play();