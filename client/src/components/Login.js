import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    console.log(this.state.credentials)
    axios.post('http://localhost:5001/api/login', this.state.credentials)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        this.props.history.push('/protected')
      }).catch((err) => {
      console.error(err)
    })
    this.setState({
      credentials: {
        username: '',
        password: ''
      }
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button type='submit'>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;