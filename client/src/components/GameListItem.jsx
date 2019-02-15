import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  gameOwner: PropTypes.string.isRequired,
  numPlayersInLobby: PropTypes.number.isRequired,
  maxLobbySize: PropTypes.number.isRequired,
  onJoinClick: PropTypes.func.isRequired,
};

const GameListItem = ({
  id,
  gameOwner,
  numPlayersInLobby,
  maxLobbySize,
  onJoinClick,
}) => (
    <div>
      <div>{`ID: ${id}`}</div>
      <div>{`Owner: ${gameOwner}`}</div>
      <div>{`Player Count: ${numPlayersInLobby}/${maxLobbySize}`}</div>
      <button type="button" onClick={() => onJoinClick(id)} disabled={numPlayersInLobby >= maxLobbySize}>Join</button>
    </div>
  );

GameListItem.propTypes = propTypes;
export default GameListItem;
