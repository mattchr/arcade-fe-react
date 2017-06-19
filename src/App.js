import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GamesList from './GamesList';
// import key from 'keymaster';
//
// key('down', function() {
//   console.log("hello world");
// })

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GamesList />
      </div>
    );
  }
}

export default App;
