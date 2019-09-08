import {
  SIGNUP_USER,
  LOADING_TRUE,
  LOGIN_USER,
  CHECK_AUTH
} from "../actions/types";

const initialState = {
  isLogin: false,
  error: "",
  loading: false,
  fetch: false
};
export default (state = initialState, action) => {

  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        error: action.payload.error,
        isLogin: action.payload.data ? true : false,
        loading: false
      };
    case LOGIN_USER:
      return {
        ...state,
        error: action.payload.error,
        isLogin: action.payload.data ? true : false,
        loading: false
      };
    case LOADING_TRUE:
      return {
        ...state,
        loading: true
      };
    case CHECK_AUTH:
      return {
        ...state,
        error: action.payload.error,
        isLogin: action.payload.data,
        loading: false,
        fetch: true
      };
    default:
      return { ...state };
  }
};
