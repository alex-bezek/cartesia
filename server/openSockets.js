const { toPlayer } = require('./player');
const R = require('ramda');
const createWorld = require('./world');

const openSockets = (io) => {
  const world = createWorld(io);

  // Add the WebSocket handlers
  io.sockets.on('connection', (socket) => {
    // Manage Players Connecting and Leaving
    world.addPlayer(toPlayer(socket.id));
    socket.on('disconnect', () => {
      world.removePlayer(toPlayer(socket.id));
    });
  });


  // // Used to continuously push data to all sockets
  // setInterval(() => {
  //   io.sockets.emit('message', 'hi from server!!');
  // }, 1000 * 5);

/**
 * open socket to listen for when sign in's happen
 *
 * When 4 people have signed in, set each of their locations on the map,
 * Emit an event with the data
 ** Saying the game is in setup mode
 ** The queen that the players kidnapped and are hiding

 * Listen for events for people hiding queens.
 ** How to notify them if its illegal or failed??
 *
 * When all players are done hiding queens, emit event with data
 ** saying the game started
 ** player locations
 ** Current Player Turn
 ** Initial cards drawn
 */
};

module.exports = openSockets;
