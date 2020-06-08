import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostCreate from "./components/PostCreate";
import PostDisplay from "./components/PostDisplay";
import loadPosts from "./actions/loadPosts";
import { connect } from "react-redux";

class App extends React.Component {

  componentDidMount(){
    this.props.loadPosts()
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/posts/new" component={PostCreate} />
          <Route exact path="/posts" component={PostDisplay} />
        </div>
      </Router>
    );
  }
}

export default connect(null,{loadPosts})(App);
