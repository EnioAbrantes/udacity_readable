import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { handleInitialCategories, handleInitialPosts} from './actions/shared'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialCategories())
    this.props.dispatch(handleInitialPosts())
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.props.categories}</p>
        
        </header> 
      </div>
    );
  }
}


function mapStateToProps({ categories, posts }){
  console.log(Object.values(categories)[0] && Object.values(categories)[0].name)
  console.log(Object.values(posts)[0] && Object.values(posts))
  var x = JSON.stringify(categories.categories)
  return {
    categories : x
  }

}

export default connect(mapStateToProps)(App);
