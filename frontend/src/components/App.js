import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { handleInitialCategories, handleInitialPosts} from '../actions/shared'
import Post from './Post'
import { Button } from 'reactstrap';
import { handlePostsFromCategory } from '../actions/posts'

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
      <div className="App">

        <header className="Header-center">
          <h1>Posts</h1>
        </header> 
        <div className="inlineInfo">
          
          <ul className='categories'>
            <h2>Categories</h2>
            {this.props.categories.map((categorie) =>
              <li>
                <Button style={{width: '100%'}} onClick={ (e) => this.handleCategories(e)} outline color="primary" size="lg" value={categorie.name} >{categorie.name}</Button>
              </li>
            )}
          </ul> 
          <Post posts = {this.props.posts}/>
        </div>
        
        

      </div>
    );
  }
}


function mapStateToProps({ categories, posts }){
  /* console.log("PPC"+ postsPerCategory) */
  return {
    categories : Object.values(categories),
    posts : Object.values(posts)
  }
  
}

export default connect(mapStateToProps)(App);
