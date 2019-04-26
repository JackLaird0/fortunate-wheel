// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/base.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

//Game Classes 
import Player from './scripts/player';
import Game from './scripts/game';
import Puzzle from './scripts/puzzle';  
import {getPuzzleQuestion, getWheelValues} from './scripts/data-helper';

let players
let puzzle
let game 

$(document).ready(() => {
  game = new Game();
});

$('.submit-names').on('click', e => {
  createPlayers();
  makeGameBoard();
  createLetterBank();
  performElementAnimations();
  enterLetters();
  $('.letter').on('click', e => selectLetter(e))
});

const performElementAnimations = () => {
  $('.name-form').addClass('form-completed');
  $('.scoreboard-hidden').addClass('scoreboard-show');
}

const createLetterBank = () => {
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'].reverse();
  const vowels = ['a', 'e', 'i', 'o', 'u'].reverse();
  prependLetters(consonants, 'consonants');
  prependLetters(vowels, 'vowels');
}

const prependLetters = (bank, type) => {
  bank.forEach( (letter, ind) => {
    $(`.${type}`).prepend(`<p class='letter'>${letter.toUpperCase()}</p>`)
  })
}

$('.letter').on('click', e => selectLetter(e))

const createPlayers = () => {
  const playerClass = ['.playerOne', '.playerTwo', '.playerThree'];
  const playerNames = playerClass.map( (player, ind) => {
    if( $(player).val() ) {
      $(player + '-name').text($(player).val());
      return $(player).val();
    } else {
      $(player + '-name').text(`Player ${ind + 1}`);
      return `Player ${ind + 1}`
    }
  })
  players = new Player(...playerNames);
}

// Makes a grid of 56 boards for the puzzle to live in
const makeGameBoard = () => {
  let puzzleQuestion = getPuzzleQuestion(game.currentRound).correct_answer;
  puzzle = new Puzzle(puzzleQuestion);
  for( let i = 0; i < 48; i++ ) {
    $('.board').prepend(`<div class='tile tile-${i}'></div>`);
  }
}

// Adds puzzle letters into grid
const enterLetters = () => {
  let answerArray = puzzle.puzzle.split('');
  answerArray.forEach((character, ind) => {
    if(character !== ' ') {
      $(`.tile-${46 - ind}`).addClass('letter-space')
    }
  })
}

const selectLetter = e => {
  const letterAnswer = addLetterToBoard(e);
  addScoreToPlayer(letterAnswer[0], letterAnswer[1]);
}

const addScoreToPlayer = (letter, answer) => {
  const scoreData = { 
      spinValue: game.spinValue,
      currentPlayer: `p${game.currentPlayer}`,
      letterFactor: answer.filter( character => letter === character ).length
                  }     

  if(scoreData.letterFactor > 0) {
    players.guessLetter(scoreData.currentPlayer, scoreData.spinValue, scoreData.letterFactor)
    changeScoreboard();
  } else {
    game.nextPlayer();
  }
}

const addLetterToBoard = e => {
  const selectedLetter = $(e.target).text().toUpperCase();
  const answer = puzzle.puzzle.toUpperCase().split('');
  game.usedLetters.push(selectedLetter);
  answer.forEach( (character, ind) => {
    if(selectedLetter == character ) {
      $(`.tile-${46 - ind}`).prepend(`<p>${character}</p>`)
    } 
  }) 
  return [selectedLetter, answer]
}

const changeScoreboard = () => {
  $(`.player${game.currentPlayer}-score`).text('Score: ' + String(players[`p${game.currentPlayer}`].balance))
}

$('.spin-wheel').on('click', () => {
  spinWheel()
})

const spinWheel = () => {
  let spinValues = getWheelValues();
  game.spinWheel(spinValues[Math.floor(Math.random() * (spinValues.length) + 1)])
  if(typeof game.spinValue !== 'number') {
    game.nextPlayer()
  }
  console.log(game.spinValue)
}




