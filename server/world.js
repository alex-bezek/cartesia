const R = require('ramda');
const { isPlayerEqual } = require('./player');

const MAX_PLAYERS = 2;

const createWorld = (io) => {
  const world = {
    players: [],
  };

  const emitToOnePlayer = (action, data, player) => {
    io.sockets.connected[player.socketId].emit(action, data);
  };
  const curriedEmitToOnePlayer = R.curry(emitToOnePlayer);

  const emitToAllPlayers = (action, data) => {
    R.forEach(curriedEmitToOnePlayer(action, data), world.players);
  };


  const isFull = () => world.players.length === MAX_PLAYERS;
  const rejectPlayer = (player) => {
    io.sockets.connected[player.socketId].emit('GAME_FULL');
    console.log('GAME_FULL');
  };

  return ({
    addPlayer(player) {
      if (isFull()) {
        rejectPlayer(player);
      } else {
        world.players = R.append(player, world.players);
        emitToAllPlayers('PLAYERS_CHANGED', world.players);
      }
      if (world.players.length === MAX_PLAYERS) {
        emitToAllPlayers('SET_GAME_STATE', 'SETUP');
      }
    },
    removePlayer(player) {
      world.players = R.reject(isPlayerEqual(player), world.players);
      emitToAllPlayers('PLAYERS_CHANGED', world.players);
    },
  });
};

module.exports = createWorld;

// const actionHandler = (action) => {
//   switch (action.type) {
//     case 'PLAYER_JOIN':
//       // code
//       console.log('player joined');
//       return;
//     default:
//       console.log(`No found action of type: ${action.type}`);
//   }
// };

// const createWorld = (io) => {
//   const getWorld = () => worldData;
//   const dispatch = action => actionHandler(action);
//   const notify

//   return { getWorld, dispatch };
// };

// module.exports = createWorld;

// // Creates an observable of world
// // Exports the observable

// // Then other files import the observable and subscribe to changes and do the socket.io emit events

// // Create an observable stream with a function to push onto the stream (global shared state now???)
