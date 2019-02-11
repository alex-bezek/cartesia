const handlers = require('../handlers/index.js');
const Player = require('../models/player');
const GameRespository = require('../repositories/game');

const playerFactory = () => new Player({
  id: 123,
  username: 'Alex Bezek',
  socketID: '123456789',
});

// Reset the db before each test run
beforeEach(() => {
  GameRespository.reset();
});

test('the game count starts off as 0', () => {
  expect(handlers.getGameList().length).toBe(0);
});

test('creating a game results in the right data', () => {
  expect(handlers.getGameList().length).toBe(0);
  const player = playerFactory();
  const { action, data } = handlers.createGame(player);
  expect(action).toEqual(handlers.actions.UPDATE_GAME_LIST);
  expect(data).toEqual({ gameList: handlers.getGameList() });
  expect(handlers.getGameList()[0].gameOwner).toEqual(player.toJSON());
});

test('joining a game works', () => {
  expect(handlers.getGameList().length).toBe(0);
  const player = playerFactory();
  const game = handlers.createGame(player).data.gameList[0];
  const { action, data } = handlers.joinGame(game.id, player);
  expect(action).toEqual(handlers.actions.UPDATE_LOBBY_DATA);
  expect(data.gameLobby.players.length).toBe(1);
  expect(data.gameLobby.players[0]).toEqual(player.toJSON());
});
