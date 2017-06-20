import React, { Component } from 'react';
import marquee from './mame_marquee.jpg';
import GamesList from './GamesList';

class App extends Component {

  render() {
    var games = [
        {
          key: 'dkong',
          name: 'Donkey Kong'
        },
        {
          key: 'umk3',
          name: 'Ultimate Mortal Kombat 3'
        },
        {
          key: 'sfa',
          name: 'Street Fighter 3'
        }
    ];
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
        <GamesList games={games}/>
      </div>
    );
  }
}

export default App;
