
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const openSockets = require('./openSockets');
const handler = require('./handlers/index');

app.set('port', 5000);

// For testing purposes
app.get('/api/games', (req, res) => {
  res.send(handler.getGameList());
});

// Starts the server.
server.listen(5000, () => {
  // TODO: Create a logger object to use in place of console.log
  // eslint-disable-next-line no-console
  console.log('Starting server on port 5000');
});

openSockets(io);
