import { LOADING_TRUE, SIGNUP_USER, LOGIN_USER, CHECK_AUTH, LOGOUT_USER } from "./types";

export const logoutUser = () => {
  return async dispatch => {
    dispatch({
      type: LOADING_TRUE
    })
    try {
      const result = await fetch('/api/v1/logout').then(res => res.json());
      console.log(11111111111111, result);
      dispatch({
        type: LOGOUT_USER,
        payload: result
      })
    } catch {
      console.log(2222222222, 'catch');
      dispatch({
        type: LOGOUT_USER,
        payload: {data: '', error: 'There Is Something Error Please Try Again'}
      })
    }

  }
}

export const signupUser = userData => {
  return async dispatch => {
    try {
      dispatch({
        type: LOADING_TRUE
      });
      const result = await fetch("/api/v1/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData)
      }).then(res => res.json());
      dispatch({
        type: SIGNUP_USER,
        payload: result
      });
    } catch {
      dispatch({
        type: SIGNUP_USER,
        payload: {
          data: "",
          error: "There Is Something Error Please Try Again"
        }
      });
    }
  };
};

export const loginUser = userData => {
  return async dispatch => {
    try {
      dispatch({
        type: LOADING_TRUE
      });
      const result = await fetch("/api/v1/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData)
      }).then(res => res.json());
      dispatch({
        type: LOGIN_USER,
        payload: result
      });
    } catch {
      dispatch({
        type: LOGIN_USER,
        payload: {
          data: "",
          error: "There Is Something Error Please Try Again"
        }
      });
    }
  };
};

export const checkAuth = () => {
  return async dispatch => {
    try {
      dispatch({
        type: LOADING_TRUE
      });
      const result = await fetch("/api/v1/check").then(res => res.json());
      
      dispatch({
        type: CHECK_AUTH,
        payload: result
      });
    } catch {
      dispatch({
        type: CHECK_AUTH,
        payload: { data: "", error: "There Is Error Please Try Again" }
      });
    }
  };
};
