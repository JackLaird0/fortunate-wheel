import chai from 'chai';
const expect = chai.expect;
import Game from '../src/scripts/game';

describe('Game class tests', () => {
  describe('Game class constructor', () => {
    let game
  
    beforeEach(done => {
      game = new Game();
      done();
    });
  
    it('should be a function', () => {
      expect(Game).to.be.a('function');
    });
  
    it('should return an object', () => {
      expect(game).to.be.an('object');
    });
  
    it('should have a currentRound property that equals 1', () => {
      expect(game.currentRound).to.be.a('number');
      expect(game.currentRound).to.equal(1);
    });
  
    it('should have a usedLetters property thats an array', () => {
      expect(game.usedLetters).to.be.an('array');
      expect(game.usedLetters.length).to.equal(0);
    })
  
    it('should have currentPlayer property that equals 1', () => {
      expect(game.currentPlayer).to.be.a('number');
      expect(game.currentPlayer).to.equal(1);
    });
  
    it('should have a spin value equal to 0', () => {
      expect(game.spinValue).to.be.a('number');
      expect(game.spinValue).to.equal(0);
    });
  });

  describe('Game class methods', () => {
    let game
  
    beforeEach(done => {
      game = new Game();
      done();
    });

    it('should increase currentRound when roundAdvance is called', () => {
      expect(game.currentRound).to.equal(1);
      game.roundAdvance();
      expect(game.currentRound).to.equal(2);
    });

    it('should increase currentPlayer when nextPlayer is called', () => {
      expect(game.currentPlayer).to.equal(1);
      game.nextPlayer();
      expect(game.currentPlayer).to.equal(2);
    });

    it('should set the current player back to 1 if the current player is 3', () => {
      game.nextPlayer();
      game.nextPlayer();
      expect(game.currentPlayer).to.equal(3);
      game.nextPlayer();
      expect(game.currentPlayer).to.equal(1);
    });

    it('should reassign the spin value when spinWheel is called', () => {
      const spinValue = 2500;
      game.spinWheel(spinValue);
      expect(game.spinValue).to.be.a('number')
      expect(game.spinValue).to.equal(2500);
    })
  });
});