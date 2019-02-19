import io from 'socket.io-client';
import { actions, actionCreators } from './actions';

// TODO: Make this come from config/process.env
export const socket = io.connect('http://localhost:5000');

// TODO: Remove this once we implement an actual action that uses the store.dispatch
// eslint-disable-next-line no-unused-vars
export default (store) => {
  socket.on('connect', () => {
    // store.dispatch(setSessionId(socket.id));
  });

  socket.on(actions.UPDATE_GAME_LIST, (data) => {
    store.dispatch(actionCreators.updateGameList(data.gameList));
  });
};

// eslint-disable-next-line no-unused-vars
export const socketMiddleware = store => next => (action) => {
  // let messages = store.getState().messages;

  const result = next(action);
  if (!socket) { return result; }
  const { type, ...data } = action;
  if (type === actions.CREATE_GAME) {
    socket.emit(actions.CREATE_GAME, { ...data });
  }
  return result;
};
