import { getAuthCookieID, getAuthCookieUserName } from './utils/authCookie';

const actions = {
  CREATE_GAME: 'CREATE_GAME',
  JOIN_GAME: 'JOIN_GAME',
  UPDATE_GAME_LIST: 'UPDATE_GAME_LIST',
};

const actionCreators = {
  // Client Side Invoked Actions
  createGame: () => ({
    type: actions.CREATE_GAME,
    id: getAuthCookieID(),
    username: getAuthCookieUserName(),
  }),
  joinGame: gameID => ({ type: actions.JOIN_GAME, gameID }),

  // Socket action creators
  updateGameList: gameList => ({ type: actions.UPDATE_GAME_LIST, gameList }),
};

export {
  actions,
  actionCreators,
};
