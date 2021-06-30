const RPSGame = {
  human: createPlayer(),
  computer: createPlayer(),

  play() {
    displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    displayGoodbyeMessage();
  },
};

function createPlayer() {
  return {
    // player's name?
    // player's current move

    choose() {
      // pass
    },
  };
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

