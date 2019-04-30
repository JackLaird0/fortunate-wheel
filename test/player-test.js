import chai from 'chai';
const expect = chai.expect;
import Player from '../src/scripts/player';

describe('Player class tests', () => {
  describe('Player class constructor', () => {
    let players
  
    beforeEach(done => {
      players = new Player('Jack', 'Thomas', 'Chris');
      done();
    });

    it('should be a function', () => {
      expect(Player).to.be.a('function');
    });

    it('should return an object', () => {
      expect(players).to.be.an('object');
    });

    it('should have an object property p1', () => {
      expect(players.p1).to.be.an('object');
    });

    it('p1 should have a name property', () =>   {
      expect(players.p1.name).to.equal('Jack');
    });

    it('p1 should have a property balance of 0', () => {
      expect(players.p1.balance).to.be.a('number');
      expect(players.p1.balance).to.equal(0);
    });

    it('p1 should have a property bank of 0', () => {
      expect(players.p1.bank).to.be.a('number');
      expect(players.p1.bank).to.equal(0);
    });

    it('should have an object property p2', () => {
      expect(players.p2).to.be.an('object');
    });

    it('p2 should have a name property', () =>   {
      expect(players.p2.name).to.equal('Thomas');
    });

    it('p2 should have a property balance of 0', () => {
      expect(players.p2.balance).to.be.a('number');
      expect(players.p2.balance).to.equal(0);
    });

    it('p2 should have a property bank of 0', () => {
      expect(players.p2.bank).to.be.a('number');
      expect(players.p2.bank).to.equal(0);
    });

    it('should have an object property p3', () => {
      expect(players.p3).to.be.an('object');
    });

    it('p3 should have a name property', () =>   {
      expect(players.p3.name).to.equal('Chris');
    });

    it('p3 should have a property balance of 0', () => {
      expect(players.p3.balance).to.be.a('number');
      expect(players.p3.balance).to.equal(0);
    });

    it('p3 should have a property bank of 0', () => {
      expect(players.p3.bank).to.be.a('number');
      expect(players.p3.bank).to.equal(0);
    });

    it('should have property round balance equal to 0', () => {
      expect(players.roundBalance).to.be.a('number');
      expect(players.roundBalance).to.equal(0);
    });
  });

  describe('Player class methods', () => {
    let players;
    let amount;
    let factor;
  
    beforeEach(done => {
      players = new Player('Jack', 'Thomas', 'Chris');
      amount = 500;
      factor = 1;
      players.guessLetter('p1', amount, factor);
      done();
    });

    it('should decrease player balance by 250 when buyVowel is called', () => {
      players.buyVowel('p1');
      expect(players.p1.balance).to.equal(250);
    });

    it('should increase player balance when guessLetter is called', () => {
      players.guessLetter('p1', amount, factor);
      expect(players.p1.balance).to.equal(1000);
    });

    it('should increase the roundBalance when guessLetter is called', () => {
      expect(players.roundBalance).to.equal(500);
    });

    it('should and the round balance to the bank of the player that won', () => {
      players.winRound('p3');
      expect(players.p3.bank).to.equal(500);
    });

    it('should clear out all three player balances', () => {
      const playerKeys = ['p1', 'p2', 'p3'];
      players.winRound('p3')
      playerKeys.forEach( p => {
        expect(players[p].balance).to.equal(0);
      });
    });

    it('should set the round balance back to 0', () => {
      players.winRound('p3');
      expect(players.roundBalance).to.equal(0);
    });
  });
});