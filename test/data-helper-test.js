import chai from 'chai';
const expect = chai.expect;
import {getPuzzleQuestion, getWheelValues} from '../src/scripts/data-helper';

describe('Data helper methods', () => {

  describe('Puzzle method', () => {
  
    it('getPuzzleQuestion should be a function', () => {
      expect(getPuzzleQuestion).to.be.a('function');
    });
  
    it('should return a object', () => {
      const round = 1;
      const puzzle = getPuzzleQuestion(round);
  
      expect(puzzle).to.be.an('object');
    });
  
  });
  
  describe('Wheel method', () => {
  
    it('getWheelValues should be a function', () => {
      expect(getWheelValues).to.be.a('function');
    });
  
    it('should return an array with a length of 22', () => {
      const wheelValues = getWheelValues();
  
      expect(wheelValues).to.be.an('array');
      expect(wheelValues.length).to.equal(22)
    })
  });
});