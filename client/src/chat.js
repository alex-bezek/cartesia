import io from 'socket.io-client';
import { addResponse, ADD_MESSAGE } from './actions';
const socket = io.connect('http://localhost:5000');

export default (store) => {
  socket.on('message', message => {
    store.dispatch(addResponse(message));
  });
};

export const chatMiddleware = (store) => {
  return next => action => {
    const result = next(action);
    if (socket && action.type === ADD_MESSAGE) {
      // let messages = store.getState().messages;
      console.log(`EMITTING MESSAGE: ${action.message}`)
      socket.emit('message', action.message);
    }
    return result;
  };
}
