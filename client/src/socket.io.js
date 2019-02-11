import io from 'socket.io-client';
// import {} from './actions';

// TODO: Make this come from config/process.env
export const socket = io.connect('http://localhost:5000');

export default (store) => {
  socket.on('connect', () => {
    // store.dispatch(setSessionId(socket.id));
  });
};

// eslint-disable-next-line no-unused-vars
export const socketMiddleware = store => next => (action) => {
  const result = next(action);
  // if (socket && action.type === ADD_MESSAGE) {
  //   let messages = store.getState().messages;
  //   socket.emit('message', action.message);
  // }
  return result;
};
