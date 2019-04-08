import React, { Component } from 'react';
import NewPost from './NewPost'
import Nav from './Nav'
import Container from './Container'
import PostDetails from './PostDetails'
import NoMatch from './NoMatch'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
            <Switch>
              <Route path='/' exact component={Container} />
              <Route path='/post/addPost/new' exact component={NewPost} />
              <Route path='/post/editPost/:id' exact component={NewPost} />
              <Route path="/:categorie" exact component={Container} />
              <Route path="/:category/:post_id" exact component={PostDetails} />
              <Route component={NoMatch}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default (App);
