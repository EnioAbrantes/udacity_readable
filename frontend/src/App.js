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
          <p>{this.props.name}</p>
        </header>
      </div>
    );
  }
}


function mapStateToProps({ categories }){
  console.log('categoriesxxx' + categories.name)
  return {
    name : categories.name
  }

}

export default connect(mapStateToProps)(App);
