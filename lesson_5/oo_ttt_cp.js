let readline = require('readline-sync');

function Player(marker) {
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  return this.marker;
}

function Human() {
  Player.call(this, Square.HUMAN_MARKER);
}

Human.prototype = Object.create(Player.prototype);
Human.constructor = Human;

function Computer() {
  Player.call(this, Square.COMPUTER_MARKER);
}

Computer.prototype = Object.create(Player.prototype);
Computer.constructor = Computer;

function Square(marker) {
  this.marker = marker || Square.UNUSED_SQUARE;
}

Square.UNUSED_SQUARE = ' ';
Square.HUMAN_MARKER = 'X';
Square.COMPUTER_MARKER = 'O';

Square.prototype.setMarker = function(marker) {
  this.marker = marker;
}

Square.prototype.getMarker = function() {
  return this.marker;
}

Square.prototype.toString = function() {
  return this.marker;
}

Square.prototype.isUnused = function() {
  return this.marker === Square.UNUSED_SQUARE;
}

function Board() {
  this.squares = {};
    for (let i = 1; i < 10; i++) {
      this.squares[i] = new Square();
    }
}

Board.prototype.displayWithClear = function() {
  console.clear();
  console.log('');
  console.log('');
  this.display()
}

Board.prototype.markSquareAt = function(key, marker) {
  this.squares[key].setMarker(marker);
}

Board.prototype.unusedSquares = function() {
  let keys = Object.keys(this.squares);
  return keys.filter(key => this.squares[key].isUnused());
}

Board.prototype.boardIsFull = function() {
  return this.unusedSquares().length === 0;
}

Board.prototype.countMarkersFor = function(player, keys) {
  let markers = keys.filter(key => {
    return this.squares[key].getMarker() === player.getMarker();
  });
  return markers.length;
}

Board.prototype.display = function() {
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

function TTTGame() {
  this.board = new Board();
  this.human = new Human();
  this.computer = new Computer();
}

TTTGame.POSSIBLE_WINNING_ROWS = [
  [ "1", "2", "3" ],
  [ "4", "5", "6" ],
  [ "7", "8", "9" ],
  [ "1", "4", "7" ],
  [ "2", "5", "8" ],
  [ "3", "6", "9" ],
  [ "1", "5", "9" ],
  [ "3", "5", "7" ],  
]

TTTGame.prototype.play = function() {
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
}

TTTGame.prototype.humanMoves = function() {
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
}

TTTGame.prototype.computerMoves = function() {
  let validChoices = this.board.unusedSquares();
  let choice;

  do {
    choice = Math.floor((Math.random() * 9) + 1).toString();
  } while (!validChoices.includes(choice));

  this.board.markSquareAt(choice, this.computer.getMarker());
}

TTTGame.prototype.displayWelcomeMessage = function() {
  console.clear();
  console.log('Welcome to Tic Tac Toe!');
  console.log('');
}

TTTGame.prototype.displayGoodbyeMessage = function() {
  console.log('Thanks for playing Tic Tac Toe! Goodbye!');
}

TTTGame.prototype.displayResults = function() {
  if (this.isWinner(this.human)) {
    console.log('You won! Congratulations!');
  } else if (this.isWinner(this.computer)) {
    console.log(('The computer won'));
  } else {
    console.log('The game ended in a tie');
  }
}

TTTGame.prototype.isWinner = function(player) {
  return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
    return this.board.countMarkersFor(player, row) === 3;
  });
}

TTTGame.prototype.gameOver = function() {
  return this.board.boardIsFull() || this.someoneWon();
}

TTTGame.prototype.someoneWon = function() {
  return this.isWinner(this.human) || this.isWinner(this.computer);
}

let game = new TTTGame();
game.play();