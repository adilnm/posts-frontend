import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostCreate from './components/PostCreate'
import PostDisplay from './components/PostDisplay';


function App() {
    return(
      <Router>
        <div>
          <Route exact path="/posts/new" component={PostCreate} />
          <Route exact path="/posts" component={PostDisplay} />
        </div>
      </Router>
    )
}

export default App;
