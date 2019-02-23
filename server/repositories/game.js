const db = require('./db');
const Game = require('../models/game');
/*
  A set of functions that handle interacting with the database
  to return Game object instances orr update data. Favors using
  the Game class as an object other than raw JSON other than when
  writing to the DB.
*/

// Returns a game object for each game in the db
const all = () => db.games.map(dbJSON => new Game(dbJSON));

// Returns a game object matching the id specified
const find = id => new Game(db.games.find(game => game.id === id));

// Finds the game matching the id, and merges in the top level attributes passed in
const update = (id, newGameJSON) => {
  const gameIndex = db.games.findIndex(game => game.id === id);
  db.games[gameIndex] = { ...db.games[gameIndex], ...newGameJSON };
};

// Creates a new game object, sets the player as the game owner,
// and persists it to the database
const create = (player) => {
  const game = new Game({ gameOwner: player.toJSON() });
  db.games.push(game.toDBJSON());
  return game;
};

// Finds the game with the id specified, and adds the player to the player list
// Returns true or false if the player was added successfully.
const addPlayerToGame = (gameID, player) => {
  const game = find(gameID);
  if (game && !game.isFull && !game.isPlayerInGame(player)) {
    update(game.id, { players: [...game.players, player] });
    return true;
  }
  return false;
};

// Clears out the db games array. Used for testing
const reset = () => { db.games = []; };

module.exports = {
  all,
  find,
  create,
  addPlayerToGame,
  reset,
};
