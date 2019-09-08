import React, { Component } from "react";
import {connect} from 'react-redux'

import {newPost} from '../../actions/postAction'

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onClick = e => {
    e.preventDefault();
    const {title, body} = this.state;
   // ACTION CALLED
   this.props.newPost({title, body});
  };
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onClick}>
          <div>
            <input
              type="text"
              placeholder="title"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div>
            <textarea
              onChange={this.onChange}
              name="body"
              placeholder="body"
              value={body}
            ></textarea>
          </div>
          <button onClick={this.onClick}> Add Post </button>
        </form>
      </div>
    );
  }
}

export default connect(null, {newPost})(PostForm);