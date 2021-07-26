class Card {
  constructor() {
    this.deck = new Deck();
  }

  deal() {
    let randIdx = Math.floor(Math.random() * 52);
    return this.deck[randIdx];
  }
}

class Deck {
  constructor() {
    this.deck = this.fillDeck();
  }

  fillDeck() {
    let deck = [];
    let types = [
      {suit: 'Diamonds'},
      {suit: 'Hearts'},
      {suit: 'Clubs'},
      {suit: 'Spades'}
    ];

    let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10,
       'Jack', 'Queen', 'King', 'Ace'];

    for (let i = 0; i < cards.length; i++) {
      for (let j = 0; j < 4; j++) {
        deck.push([cards[i], types[j]]);
      }
    }
    return deck;
  }
}

class Participant {
  constructor() {
  }

  hit() {
    
  }

  stay() {
    //STUB
  }

  isBusted() {
    //STUB
  }

  score() {
    //STUB
  }
}

class Player extends Participant {
  constructor() {
    super();
  }
}

class Dealer extends Participant {
  constructor() {
    super();
  }

  hide() {
    //STUB
  }

  reveal() {
    //STUB
  }
}

class TwentyOneGame {
  constructor() {
    this.player = new Player();
    this.computer = new Dealer();
  }

  start() {
    this.displayWelcomeMessage();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    this.displayGoodbyeMessage();
  }

  dealCards() {
    //STUB
  }

  showCards() {
    console.log();
  }

  playerTurn() {
    //STUB
  }

  dealerTurn() {
    //STUB
  }

  displayWelcomeMessage() {
    console.log('Welcome to Twenty One!');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Twenty One!');
  }

  displayResult() {
    //STUB
  }
}

// let game = new TwentyOneGame();
// game.start();

let player = new Player();
let dealer = new Dealer();
console.log(player.deck.deck === dealer.deck.deck);