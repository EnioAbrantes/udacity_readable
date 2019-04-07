import React, { Component } from 'react';
import NewPost from './NewPost'
import EditPost from './EditPost'
import Nav from './Nav'
import Container from './Container'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Route path='/' exact component={Container} />
          <Route path='/newPost' exact component={NewPost} />
          <Route path='/editPost' exact component={EditPost} />
          <Route path="/categories/:categorie" component={Container} />
        </div>
      </Router>
    );
  }
}

export default (App);
