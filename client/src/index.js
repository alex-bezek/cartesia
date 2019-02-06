import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'; // eslint-disable-line import/no-extraneous-dependencies

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import listen, { socketMiddleware } from './socket.io';
import rootReducer from './reducers';


const reduxDevTools = () => (
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
);

const buildMiddlewares = () => {
  const middleware = process.env.NODE_ENV !== 'production' ? [createLogger()] : [];
  return [...middleware, socketMiddleware];
};

// From online guide
const initialState = window.INITIAL_STATE; // <-- Probs dont need this
const store = createStore(
  rootReducer,
  initialState,
  reduxDevTools()(applyMiddleware(...buildMiddlewares())),
);
listen(store);

const Provided = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Provided />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();