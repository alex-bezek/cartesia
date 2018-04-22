import io from 'socket.io-client';
import {
  addResponse,
  setPlayers,
  setGameState,
  setSessionId,
  ADD_MESSAGE,
} from './actions';

const socket = io.connect('http://localhost:5000');

export default (store) => {
  socket.on('connect', () => {
    store.dispatch(setSessionId(socket.id));
  });

  socket.on('message', (message) => {
    store.dispatch(addResponse(message));
  });

  socket.on('PLAYERS_CHANGED', (players) => {
    store.dispatch(setPlayers(players));
  });

  socket.on('SET_GAME_STATE', (gameState) => {
    store.dispatch(setGameState(gameState));
  });
};

// eslint-disable-next-line no-unused-vars
export const socketMiddleware = store => next => (action) => {
  const result = next(action);
  if (socket && action.type === ADD_MESSAGE) {
    // let messages = store.getState().messages;
    socket.emit('message', action.message);
  }
  return result;
};
