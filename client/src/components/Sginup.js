import React, { Component } from "react";
import { signupUser } from "../actions/authUser";
import { connect } from "react-redux";

class Sginup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  onChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  onClick = e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    this.props.signupUser({ data: { name, email, password } });
  };

  componentWillReceiveProps(nextProps) {
    const {isLogin } = nextProps.auth;
    if (isLogin) {
      this.props.history.push("/");
    }
  }
  render() {
    const { name, email, password } = this.state;
    const { loading, error } = this.props.auth;
    return (
      <div>
        <form onSubmit={this.onClick}>
          <h2>Signup to todo app</h2>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={this.onChange}
              value={name}
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={this.onChange}
              value={email}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div>
            {error && <p>{error}</p>}
            <button onClick={this.onClick}>
              {loading ? "Loading ..." : "Signup"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { signupUser }
)(Sginup);
