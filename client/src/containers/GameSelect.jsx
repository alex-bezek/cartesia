import { connect } from 'react-redux';
import GameSelect from '../pages/GameSelect';
import { actionCreators } from '../actions';

const mapStateToProps = state => ({
  gameList: state.gameList,
});

const mapDispatchToProps = dispatch => ({
  onCreateGame: () => dispatch(actionCreators.createGame()),
  onJoinClick: gameID => dispatch(actionCreators.joinGame(gameID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameSelect);
