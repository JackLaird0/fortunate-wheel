class Game {
  constructor() {
    this.currentRound = 1;
    this.usedLetters = [];
    this.currentPlayer = 1;
    this.spinValue = 0;
  }
  

  roundAdvance() {
    this.currentRound += 1;
    this.usedLetters = [];
  }

  nextPlayer() {
    this.currentPlayer === 3 ? this.currentPlayer = 1 : this.currentPlayer ++
  }

  spinWheel(value) {
    this.spinValue = value;
  }
}

export default Game;