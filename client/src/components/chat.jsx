import React from 'react';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    setInterval(() => {
      this.props.onSubmit(undefined, 'Hi From Client');
    }, 1000 * 3);
  }

  render() {
    const { messages, players } = this.props;
    return (
      <div>
        <h1>Players</h1>
        {
          players.map(player => (
            <p>{player.name}</p>
          ))
        }
        <h3>Messages</h3>
        {
          messages.map(message => (
            <p>{message}</p>
          ))
        }
      </div>
    );
  }
}

export default Chat;
