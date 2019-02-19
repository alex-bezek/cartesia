import { getAuthCookieID, getAuthCookieUserName } from './utils/authCookie';

const actions = {
  CREATE_GAME: 'CREATE_GAME',
  JOIN_GAME: 'JOIN_GAME',
  UPDATE_GAME_LIST: 'UPDATE_GAME_LIST',
};

const userData = () => ({
  id: getAuthCookieID(),
  username: getAuthCookieUserName(),
});

const actionCreators = {
  // Client Side Invoked Actions
  createGame: () => ({
    type: actions.CREATE_GAME,
    ...userData(),
  }),
  joinGame: gameID => ({
    type: actions.JOIN_GAME,
    gameID,
    ...userData(),
  }),

  // Socket action creators
  updateGameList: gameList => ({ type: actions.UPDATE_GAME_LIST, gameList }),
};

export {
  actions,
  actionCreators,
};
