import React from 'react';
import { Redirect } from 'react-router-dom';
import { getAuthCookie } from '../utils/authCookie';
import { GAME_SELECT_PATH, LOGIN_PATH } from '../constants';

// TODO: Make this a HOC that can render any component or redirect to login and we will wrap all pages in it
const App = () => (getAuthCookie().username ? <Redirect to={GAME_SELECT_PATH} /> : <Redirect to={LOGIN_PATH} />);

export default App;
