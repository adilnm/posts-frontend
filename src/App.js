import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostCreate from './components/PostCreate'

function App() {
    return(
      <Router>
        <div>
          <Route exact path="/posts/new" component={PostCreate} />
        </div>
      </Router>
    )
}

export default App;
