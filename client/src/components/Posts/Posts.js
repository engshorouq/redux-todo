import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPost} from '../../actions/postAction';

import Post from './Post';

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPost()
    }

    componentWillReceiveProps(nextProps){
        this.props.posts.unshift(nextProps.post)
    }

    render() {
        const {posts, error} = this.props;
        return (
            <div>
                <h1>Posts</h1>
                {error && <p>{error}</p>}
                {posts && posts.map((post, index) => <Post key={index} {...post} />)}
            </div>
        )
    }
}

const mapStateProps = state => ({
    posts: state.posts.items,
    post: state.posts.item,
    error: state.posts.error
})

export default connect(mapStateProps, {fetchPost})(Posts);