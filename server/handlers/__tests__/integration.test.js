const faker = require('faker');
const handlers = require('../index.js');
const Player = require('../../models/player');
const GameRespository = require('../../repositories/game');

const playerFactory = () => new Player({
  id: faker.random.uuid(),
  username: faker.name.findName(),
  socketID: faker.random.uuid(),
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

test('only allows 8 people to join a game', () => {
  expect(handlers.getGameList().length).toBe(0);
  const first8Players = new Array(8).fill().map(playerFactory);
  const game = handlers.createGame(first8Players[0]).data.gameList[0];
  const first8PlayerJoinResponses = first8Players.map(
    player => handlers.joinGame(game.id, player),
  );
  expect(first8PlayerJoinResponses.every(
    response => response.action === handlers.actions.UPDATE_LOBBY_DATA,
  )).toBe(true);
  first8PlayerJoinResponses.forEach((response, index) => {
    expect(response.data.gameLobby.players.length).toBe(index + 1);
  });
  expect(handlers.joinGame(game.id, playerFactory()).action).toBe(handlers.actions.ERROR);
});

test('a player cant join a game twice', () => {
  expect(handlers.getGameList().length).toBe(0);
  const player = playerFactory();
  const game = handlers.createGame(player).data.gameList[0];
  expect(handlers.joinGame(game.id, player).action).toEqual(handlers.actions.UPDATE_LOBBY_DATA);
  expect(handlers.joinGame(game.id, player).action).toEqual(handlers.actions.ERROR);
});
