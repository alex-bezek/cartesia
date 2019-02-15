import React from 'react';
import PropTypes from 'prop-types';
import GameListItem from '../components/GameListItem';

const propTypes = {
  gameList: PropTypes.arrayOf(PropTypes.shape({})),
  onJoinClick: PropTypes.func.isRequired,
  onCreateGame: PropTypes.func.isRequired,
};

const defaultProps = {
  gameList: [],
};

const noGames = onCreateGame => (
  <React.Fragment>
    <h2>No Games Made, be the first!!</h2>
    <button type="button" onClick={onCreateGame}>Create Game</button>
  </React.Fragment>
);

const GameSelect = ({ gameList, onJoinClick, onCreateGame }) => (
  <React.Fragment>
    <h1> Game List</h1>
    {
      gameList.length <= 0
        ? noGames(onCreateGame)
        : gameList.map(game => <GameListItem key={game.id} {...game} onJoinClick={onJoinClick} />)
    }
  </React.Fragment>
);

GameSelect.defaultProps = defaultProps;
GameSelect.propTypes = propTypes;
export default GameSelect;
