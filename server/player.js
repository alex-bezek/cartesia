const toPlayer = socketId => ({
  socketId,
  name: socketId,
});

const isPlayerEqual = player1 => player2 => (
  player1.socketId === player2.socketId
);

module.exports = {
  toPlayer,
  isPlayerEqual,
};

