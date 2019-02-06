
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
// const board = require('./board');
const openSockets = require('./openSockets');

app.set('port', 5000);
// app.get('/api/boards/1', (req, res) => {
//   res.send(board);
// });

// Starts the server.
server.listen(5000, () => {
  console.log('Starting server on port 5000');
});

openSockets(io);
