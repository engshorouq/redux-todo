import {FETCH_POSTS, NEW_POSTS} from '../actions/types';

const initialState = {
    items: [],
    item: {},
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_POSTS: 
        return {
            ...state,
            items: action.posts,
            error: action.error
        }
        case NEW_POSTS: 
        return {
            ...state,
            item: action.post,
            error: action.error
        }
        default: return state
    }
}
