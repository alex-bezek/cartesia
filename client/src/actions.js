export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_RESPONSE = 'ADD_RESPONSE';
export const SET_PLAYERS = 'SET_PLAYERS';
export const SET_GAME_STATE = 'SET_GAME_STATE';
export const SET_SESSION_ID = 'SET_SESSION_ID';

export const addMessage = message => ({ type: ADD_MESSAGE, message });
export const addResponse = message => ({ type: ADD_RESPONSE, message });
export const setPlayers = players => ({ type: SET_PLAYERS, players });
export const setGameState = gameState => ({ type: SET_GAME_STATE, gameState });
export const setSessionId = sessionId => ({ type: SET_SESSION_ID, sessionId });

