
const openSockets = (io) => {
  // Add the WebSocket handlers
  io.sockets.on('connection', (socket) => {
    // Manage Players Connecting and Leaving
    // world.addPlayer(toPlayer(socket.id));
    // socket.on('disconnect', () => {
    //   world.removePlayer(toPlayer(socket.id));
    // });
    console.log(socket.id);
  });
};

// io.sockets.connected[player.socketId].emit(action, data);
// // Used to continuously push data to all sockets
// setInterval(() => {
//   io.sockets.emit('message', 'hi from server!!');
// }, 1000 * 5);

module.exports = openSockets;
