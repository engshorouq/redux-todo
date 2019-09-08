import { LOADING_TRUE, SIGNUP_USER, LOGIN_USER, CHECK_AUTH } from "./types";

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
