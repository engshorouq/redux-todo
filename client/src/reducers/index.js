import {combineReducers} from 'redux';
import postReducer from './postReducer';
import authUser from './authUser';

export default combineReducers({
    posts: postReducer,
    auth: authUser
})