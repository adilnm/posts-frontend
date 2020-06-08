import React from "react";
import { connect } from "react-redux";
import newPost from "../actions/newPost";

class PostCreate extends React.Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
      e.preventDefault()
      this.props.newPost(this.state)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            placeholder="Title"
          />
          <br />
          <textarea
            onChange={this.handleChange}
            name="body"
            id=""
            cols="30"
            rows="10"
            placeholder="Body"
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { newPost })(PostCreate);
