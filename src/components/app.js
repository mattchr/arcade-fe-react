import React, { Component } from 'react';
import marquee from '../art/mame_marquee.jpg';
import GamesList from '../containers/games_list';

class App extends Component {

  render() {
    return (
      <div className="App"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'black'
        }}
      >
        <div className="App-header">
        <img src={marquee} alt=""
          style={{position: 'static', marginLeft: '10%', width: '80%'}}
        />
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
