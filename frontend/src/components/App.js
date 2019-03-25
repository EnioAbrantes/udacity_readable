import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { handleInitialCategories, handleInitialPosts} from '../actions/shared'
import Post from './Post'
import { Button } from 'reactstrap';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialCategories())
    this.props.dispatch(handleInitialPosts())
  }


  
  render() {
    return (
      <div className="App">

        <header className="Header-center">
          <h1>Comments</h1>
        </header> 
        <div className="inlineInfo">
          
          <ul className='categories'>
            <h2>Categories</h2>
            {this.props.categories.map((categorie) =>
              <li>
                <Button outline color="primary" size="lg">{categorie.name}</Button>
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
  return {
    categories : Object.values(categories),
    posts : Object.values(posts),
  }

}

export default connect(mapStateToProps)(App);
