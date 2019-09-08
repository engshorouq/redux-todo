import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import { checkAuth } from "./actions/authUser";
import Posts from "./components/Posts/index";
import Header from "./components/Header";
import Signup from "./components/Sginup";
import Login from "./components/Login";
import PrivateRoute from "./PrivateRoute";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <PrivateRoute path="/" exact Component={Posts} />
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { checkAuth }
)(App);
