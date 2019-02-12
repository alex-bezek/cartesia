const Player = require('./models/player');
const handlers = require('./handlers/index');

/*
  This module is meant to be the interface from our socket implementation,
  to the handlers. If we moved to AWS API Gateway, this file would integrate with
  their SDK, and the handlers are lambdas.
*/

// Socket action types to respond to
const sockets = {
  CREATE_GAME: 'CREATE_GAME',
  JOIN_GAME: 'JOIN_GAME',
};

// Converts the socket id and any data sent to a player model
const socketToPlayer = (socket, data) => new Player({
  id: data.id,
  username: data.username,
  socketID: socket.id,
});

// Sets up all web socket connections
const openSockets = (io) => {
  // Add the WebSocket handlers
  io.sockets.on('connection', (socket) => {
    // TODO: Manage Players Connecting and Leaving
    // world.addPlayer(toPlayer(socket.id));
    // socket.on('disconnect', () => {
    //   world.removePlayer(toPlayer(socket.id));
    // });

    // Responds to the create a game action and notifies every open socket
    // about the new available game in the lobby.
    // Future enhancement would be to only send to the people not in a game.
    socket.on(sockets.CREATE_GAME, (socketData) => {
      // TODO: Maybe move this up, but not sure if it re-evaluates
      const player = socketToPlayer(socket, socketData);
      const { action, data } = handlers.createGame(player);
      io.sockets.emit(action, data);
    });

    // Responds to the join a game action, and adds your player to that game id in the db.
    // Emits an update of the state of the lobby to all players in that game lobby.
    socket.on(sockets.JOIN_GAME, (socketData) => {
      // TODO: Maybe move this up, but not sure if it re-evaluates
      const player = socketToPlayer(socket, socketData);
      const { action, data } = handlers.joinGame(socketData.gameID, player);
      data.gameLobby.players.foreach((lobbyPlayer) => {
        io.to(lobbyPlayer.socketID).emit(action, data);
      });
    });
  });
};

// Un-used code for reference later if needed. Clean up at some point
//
// io.sockets.connected[player.socketId].emit(action, data);
// // Used to continuously push data to all sockets
// setInterval(() => {
//   io.sockets.emit('message', 'hi from server!!');
// }, 1000 * 5);

module.exports = openSockets;
