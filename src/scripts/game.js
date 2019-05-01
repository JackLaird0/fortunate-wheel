class Game {
  constructor() {
    this.currentRound = 1;
    this.usedLetters = [];
    this.currentPlayer = 1;
    this.spinValue = 0;
  }
  

  roundAdvance() {
    this.currentRound === 4 ? this.currentRound = 1 : this.currentRound ++;
    this.usedLetters = [];
  }

  nextPlayer() {
    this.currentPlayer === 3 ? this.currentPlayer = 1 : this.currentPlayer ++;
  }

  spinWheel(value = 0) {
    this.spinValue = value;
  }
}

export default Game;