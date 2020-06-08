import React from "react";
import { connect } from "react-redux";

class PostDisplay extends React.Component {
    

  render() {
      if (this.props.posts) {
        return (
          <div>
            {this.props.posts.map(post=>{
              return(
                <ul>
                  <li>{post.title}</li>
                </ul>
              )
            })}
          </div>
        )
      }
      return null
  }
}

const mstp = state => {
  return {
    posts: state.posts
  };
};

export default connect(mstp)(PostDisplay);
