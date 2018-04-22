const R = require('ramda');
const { MAX_PLAYERS } = require('./constants');

const allQueens = [
  'Ace',
  'Spades',
  'Diamonds',
  'Hearts',
];

const availableQueens = R.slice(0, MAX_PLAYERS, allQueens);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

function* queenGenerator() {
  let queens = shuffleArray(availableQueens);
  while (true) {
    const pickedQueen = R.head(queens);
    queens = R.drop(1, allQueens);
    yield pickedQueen; // Make this yield the above code and take
    // the user's queen to verify they don't pick their own
  }
}

module.exports = queenGenerator;
