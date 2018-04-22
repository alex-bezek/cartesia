const R = require('ramda');
const queenGenerator = require('./queen');

const queenPicker = queenGenerator();

const toPlayer = socketId => ({
  socketId,
  name: socketId,
});

const assignQueen = player => R.assoc('queen', queenPicker.next().value, player);

const assignQueens = players => (
  R.map(assignQueen, players)
);

const isPlayerEqual = player1 => player2 => (
  player1.socketId === player2.socketId
);

module.exports = {
  toPlayer,
  isPlayerEqual,
  assignQueens,
};

