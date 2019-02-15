const GameRespository = require('../repositories/game');

/*
  This module is a set of functions that would be the core of different
  event handlers. They receive data parameters, and respond with an
  action and data format. This will likely be split up per domain
  and eventually if we use lambdas, would be 1 per file
*/

// Each of the action types our handlers emit
const actions = {
  UPDATE_GAME_LIST: 'UPDATE_GAME_LIST',
  UPDATE_LOBBY_DATA: 'UPDATE_LOBBY_DATA',
};

// Retrieve a list of all games for the main menu
const getGameList = () => {
  const games = GameRespository.all();
  return games.map(game => (game.toListView()));
};

// Takes a handler as a function and returns a function where
// the parameters arer applied to the handler, and it returns an
// action object with the game list data
const withGamelistEmitToAll = handler => (...args) => {
  handler(...args);
  return {
    action: actions.UPDATE_GAME_LIST,
    data: {
      gameList: getGameList(),
    },
  };
};

// Creates a game owned by the player passed in
const createGame = (player) => {
  GameRespository.create(player);
};

// adds the player to the specified game, and returns an
// action object with that game lobbies data
const joinGame = (gameID, player) => {
  GameRespository.addPlayerToGame(gameID, player);
  const game = GameRespository.find(gameID);
  return {
    action: actions.UPDATE_LOBBY_DATA,
    data: {
      gameLobby: game.toLobbyView(),
    },
  };
};

module.exports = {
  getGameList,
  createGame: withGamelistEmitToAll(createGame),
  joinGame,
  actions,
};
