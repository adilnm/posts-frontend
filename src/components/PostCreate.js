import React from "react";
import { connect } from "react-redux";
import newPost from "../actions/newPost";

class PostCreate extends React.Component {
  state = {
    title: "",
    body: "",
    published: false
  };

  handleChange = e => {
    this.setState({
        [e.target.name]:e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            placeholder="Title"
          />
          <br />
          <textarea
            onChange={this.handleChange}
            name="content"
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
