import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { handleInitialCategories } from './actions/shared'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialCategories())
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


function mapStateToProps({ categories }){
  console.log(categories[0])
  var x = JSON.stringify(categories.categories)
  return {
    categories : x
  }

}

export default connect(mapStateToProps)(App);
