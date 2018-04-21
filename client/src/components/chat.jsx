import React from 'react';

class Chat extends React.Component {
  constructor(props){
    super(props);
    setInterval(() => {
      this.props.onSubmit(undefined, 'Hi From Client');
    }, 1000 * 3);
  }

  render(){
    const { messages, onSubmit } = this.props;
    return (
      <div>
        {
          messages.map(message => (
            <p>{message}</p>
          ))
        }
      </div>
    )
  }
}

export default Chat;