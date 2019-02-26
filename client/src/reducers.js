import { actions } from './actions';

const initialSate = {
  gameList: [],
  players: [],
};

const arrayToIDs = arr => arr.map(curr => curr.id);

const rootReducer = (state = initialSate, action) => {
  switch (action.type) {
    case actions.UPDATE_GAME_LIST: {
      const knownPlayers = {};
      const normalizedGames = {};
      // Normalize the game owner and player information, converting them to just ID's in
      // the game object and pushing the players to the player slice
      action.gameList.forEach((game) => {
        const { gameOwner, players, ...gameData } = game;
        knownPlayers[gameOwner.id] = gameOwner;
        players.forEach((player) => {
          knownPlayers[player.id] = player;
        });
        normalizedGames[game.id] = {
          ...gameData,
          gameOwnerID: gameOwner.id,
          players: arrayToIDs(players),
        };
      });
      return { gameList: normalizedGames, players: knownPlayers };
    }
    default:
      return state;
  }
};

const selectGameOwnerUserName = state => gameID => state.players[state.gameList[gameID].gameOwnerID].username;
const selectGameWithOwnerName = state => gameID => ({ ...state.gameList[gameID], gameOwner: selectGameOwnerUserName(state)(gameID) });
export const selectGamesWithOwnerName = state => Object.keys(state.gameList).map(id => ({
  id,
  ...selectGameWithOwnerName(state)(id),
}));

export const playersJoinedGameID = state => (playerID) => {
  const matchingGame = Object.values(state.gameList).find(game => game.players.includes(playerID));
  return matchingGame || matchingGame.id;
};

export default rootReducer;
