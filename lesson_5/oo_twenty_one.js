class Card {
  constructor() {
    //STUB
    // What sort of state does a card need?
    // Rank? Suit? Points?
  }
}

class Deck {
  constructor() {
    this.deck = this.fillDeck();
    //STUB
    // What sort of state does a deck need?
    // 52 Cards?
    // obviously, we need some data structure to keep track of cards
    // array, object, something else?
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

  deal() {
    let randIdx = Math.floor(Math.random() * 52);
    return this.deck[randIdx];
  }
}

class Participant {
  constructor() {
    //STUB
    // What sort of state does a participant need?
    // Score? Hand? Amount of money available?
    // What else goes here? all the redundant behaviors from Player and Dealer?
  }

  hit() {
    //STUB
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
    //STUB
    // What sort of state does a player need?
    // Score? Hand? Amount of money available?
  }
}

class Dealer extends Participant {
  // Very similar to a Player; do we need this?

  constructor() {
    //STUB
    // What sort of state does a dealer need?
    // Score? Hand? Deck of cards? Bow tie?
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
    //STUB
    // What sort of state does the game need?
    // A deck? Two participants?
  }

  start() {
    this.displayWelcomeMessage();
    this.dealCards();
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
    //STUB
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

let game = new TwentyOneGame();
game.start();

let deck = new Deck();
console.log(deck.deal());