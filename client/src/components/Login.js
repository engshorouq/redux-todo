import React, { Component } from "react";
import { connect } from 'react-redux';

import { loginUser } from '../actions/authUser';

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  onClick = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser({data: { email, password }});
  }

  componentWillReceiveProps(nextProps){
    const { isLogin } = nextProps.auth;

    if(isLogin) {
      this.props.history.push('/');
     } 
  }

  render() {
    const { email, password } = this.state;
    const { error, loading } = this.props.auth;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onClick}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={this.onChange}
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            onChange={this.onChange}
            value={password}
          />
          {error && <p>{error}</p>}
          <button onClick={this.onClick}>{loading? 'Loading ...' : 'Login'}</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, { loginUser })(Login);
