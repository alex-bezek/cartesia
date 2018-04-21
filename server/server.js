
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const board = require('./board');

app.set('port', 5000);
app.get('/api/boards/1', (req, res) => {
  res.send(board);
});

// Starts the server.
server.listen(5000, function () {
  console.log('Starting server on port 5000');
});

// Add the WebSocket handlers
io.on('connection', function (socket) {
  console.log('Connected!!')

  socket.on('message', function (data) {
    console.log(`Recieved the message: ${data}`)
    io.sockets.emit('message', `Server Recieved the message: ${data}`);
  })
});

// Used to continuously push data to all sockets
setInterval(function () {
  io.sockets.emit('message', 'hi from server!!');
}, 1000*5);



// // Possibly used for managing multiple connections
// const connections = [];
// io.on('connection', socket => {
//   connections.push(socket);

//   socket.on('message', data => {
//     connections.forEach(connectedSocket => {
//       if (connectedSocket !== socket) {
//         connectedSocket.emit('message', data);
//       }
//     });
//   });

//   socket.on('disconnect', () => {
//     const index = connections.indexOf(socket);
//     connections.splice(index, 1);
//   });
// });

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


 // HOW TO COMMUNICATE AND EMIT EVENT TO JUST 1 CLIENT