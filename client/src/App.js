import React, { Component } from 'react';
import Chat from './containers/chat';

class App extends Component {
  componentDidMount() {
    // Fetch Board Data (move to an action later)
  }
  render() {
    return (
      <div className="App">
      <Chat />
      {
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
         * VERIFY YOU ONLY GET JUST YOUR OWN DATA SOMEHOW
         */
      }
      </div>
    );
  }
}

export default App;