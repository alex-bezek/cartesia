import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import GameSelect from './pages/GameSelect';
import { LOGIN_PATH, GAME_SELECT_PATH } from './constants';


const AppRouter = ({ children }) => (
  <Router>
    <div>
      {children}
      <Route path={LOGIN_PATH} component={Login} />
      <Route path={GAME_SELECT_PATH} component={GameSelect} />
    </div>
  </Router>
);

export default AppRouter;
