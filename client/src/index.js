import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import startChat, {chatMiddleware} from './chat';
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
export const reduxDevTools = () => (
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
);

const middleware = [];
// const sagaMiddleware = createSagaMiddleware();

// middleware.push(sagaMiddleware);
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
middleware.push(chatMiddleware);

// From online guide
const initialState = window.INITIAL_STATE; // <-- Probs dont need this
const store = createStore(
  rootReducer,
  initialState,
  reduxDevTools()(applyMiddleware(...middleware)),
);
startChat(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();