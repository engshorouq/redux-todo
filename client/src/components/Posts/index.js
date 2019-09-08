import React, { Component } from 'react'

import PostForm from './PostForm';
import PostsComp from './Posts';

class Posts extends Component {
    render() {
        return (
            <div>
                <PostForm />
                <PostsComp />
            </div>
        )
    }
}

export default Posts;
