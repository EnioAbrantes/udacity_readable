import React, { Component } from 'react';
import NewPost from './NewPost'
import Nav from './Nav'
import Container from './Container'
import PostDetails from './PostDetails'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Route path='/' exact component={Container} />
          <Route path='/post/addPost/new' exact component={NewPost} />
          <Route path='/post/editPost/:id' exact component={NewPost} />
          <Route path="/:categorie" exact component={Container} />
          <Route path="/:category/:post_id" exact component={PostDetails} />
        </div>
      </Router>
    );
  }
}

export default (App);
