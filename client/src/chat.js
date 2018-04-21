import io from 'socket.io-client';
import { addResponse, ADD_MESSAGE } from './actions';

const socket = io.connect('http://localhost:5000');

export default (store) => {
  socket.on('message', (message) => {
    store.dispatch(addResponse(message));
  });
};

// eslint-disable-next-line no-unused-vars
export const chatMiddleware = store => next => (action) => {
  const result = next(action);
  if (socket && action.type === ADD_MESSAGE) {
    // let messages = store.getState().messages;
    socket.emit('message', action.message);
  }
  return result;
};
