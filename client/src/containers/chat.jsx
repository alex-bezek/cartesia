import { connect } from 'react-redux';
import { addMessage } from '../actions';
import Chat from '../components/chat';

const mapStateToProps = state => ({
  messages: state.messages,
  players: state.players,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (e, message) => { dispatch(addMessage(message)); },
});

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);

export default ChatContainer;
