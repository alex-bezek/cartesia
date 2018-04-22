import { ADD_RESPONSE, SET_PLAYERS, SET_GAME_STATE, SET_SESSION_ID } from './actions';

const initialSate = {
  gameState: 'LOBBY', // SETUP, PLAY
  sessionId: undefined,
  messages: [],
  players: [],
};

const rootReducer = (state = initialSate, action) => {
  switch (action.type) {
    case ADD_RESPONSE:
      return { ...state, messages: [...state.messages, action.message] };
    case SET_PLAYERS:
      return { ...state, players: action.players };
    case SET_GAME_STATE:
      return { ...state, gameState: action.gameState };
    case SET_SESSION_ID:
      return { ...state, sessionId: action.sessionId };
    default:
      return state;
  }
};

export default rootReducer;
