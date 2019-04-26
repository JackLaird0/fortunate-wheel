import data from './data-set';

export const getPuzzleQuestion = round => {
  const wordQuantity = Object.keys(data.puzzles).reverse()
  const puzzles = data.puzzles[wordQuantity[round - 1]].puzzle_bank
  return puzzles[Math.floor(Math.random() * (puzzles.length - 1) + 1)]
} 

export const getWheelValues = () => data.wheel

