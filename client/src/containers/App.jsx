import React from 'react';
import { connect } from 'react-redux';
import Chat from './chat';

const mapStateToProps = state => ({
  gameState: state.gameState,
});

const showMode = (gameState) => {
  switch (gameState) {
    case 'LOBBY':
      return <Chat />
    case 'SETUP':
      return (<h1>Setup Phase</h1>)
    default:
      return (<h1>Game Play Time!</h1>)
    }
}

const App = ({ gameState }) => (
  <div className="App">
    {
      showMode(gameState)
      /**
       * Do the sign in workflow https://www.youtube.com/watch?v=ZoviAuHZ6IQ
       *
       * Listen for event saying game mode is in setup. Put data about which queen
       * they kidnapped into the store
       *
       * Allow user to hide queen, emit even to server when done
       *
       * Listen for even saying game mode is now done hiding and game is starting
       * Gets data for all users, whos turn it is, and just your initial cards
       */
    }
  </div>
);

export default connect(mapStateToProps)(App);
