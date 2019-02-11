import React from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AUTH_COOKIE_NAME, GAME_SELECT_PATH } from '../constants';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    const { username } = this.state;
    const { history } = this.props;
    event.preventDefault();
    if (username) {
      Cookies.set(AUTH_COOKIE_NAME, username);
      history.push(GAME_SELECT_PATH);
    }
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
