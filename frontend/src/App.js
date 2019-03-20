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
        </header>
      </div>
    );
  }
}

export default connect()(App);
