import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/authUser'
import PostForm from './PostForm';
import PostsComp from './Posts';

class Posts extends Component {
    handleClick = () => {
        this.props.logoutUser();
    }

    render() {
        const { loading, error } = this.props.auth;
        return (
            <div>
                <button onClick={this.handleClick}>{loading? 'Loading ...' : 'Logout'}</button>
                {error && <p>{error}</p>}
                <PostForm />
                <PostsComp />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})(Posts);
