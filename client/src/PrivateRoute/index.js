import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ path, Component, auth, ...rest }) => {

  if (auth.fetch) {
    return (
      <Route
        path="/"
        {...rest}
        render={() => (auth.isLogin ? <Component /> : <Redirect to="/login" />)}
      />
    );
  } else
    return <Route path="/" {...rest} exact render={() => <div>Loading</div>} />;
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
