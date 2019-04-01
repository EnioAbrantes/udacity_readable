import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialCategories, handleInitialPosts} from '../actions/shared'
import Post from './Post'
import { Button } from 'reactstrap';
import { handlePostsFromCategory } from '../actions/posts'
import NewPost from './NewPost'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialCategories())
    this.props.dispatch(handleInitialPosts())
  }


  handleCategories = (e) => {
    console.log(e.target.value)
    this.props.dispatch(handlePostsFromCategory(e.target.value))
  }


  
  render() {
    return (
      
      <NewPost/>
    );
  }
}


function mapStateToProps({ categories, posts }){
  console.log("PPC"+ posts)
  return {
    categories : Object.values(categories),
    posts : Object.values(posts)
  }
  
}

export default connect(mapStateToProps)(App);
