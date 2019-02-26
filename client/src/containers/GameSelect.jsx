import { connect } from 'react-redux';
import GameSelect from '../pages/GameSelect';
import { actionCreators } from '../actions';
import { selectGamesWithOwnerName } from '../reducers';

const mapStateToProps = state => ({
  gameList: selectGamesWithOwnerName(state),
});

const mapDispatchToProps = dispatch => ({
  onCreateGame: () => dispatch(actionCreators.createGame()),
  onJoinClick: gameID => dispatch(actionCreators.joinGame(gameID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameSelect);
