import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { socket } from '../socket.io';
import { AUTH_COOKIE_NAME, GAME_SELECT_PATH, LOGIN_PATH } from '../constants';

// TODO: Make this a HOC that can render any component or redirect to login and we will wrap all pages in it
const App = () => {
  console.log(socket);
  console.log(`The Cookie value is ${Cookies.get(AUTH_COOKIE_NAME)}`);
  return (Cookies.get(AUTH_COOKIE_NAME) ? <Redirect to={GAME_SELECT_PATH} /> : <Redirect to={LOGIN_PATH} />);
};

export default App;
