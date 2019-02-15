import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  // TODO: Game Owner is an object right now. Need the backend to either return just the name, or we destructure client side
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
