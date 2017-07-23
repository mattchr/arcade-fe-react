import React, { Component } from 'react';
import SelectedGameBorder from './SelectedGameBorder';

class Game extends Component {
  render() {
    return (
      <div
        onClick={this.props.onSelected}
        tabIndex={this.props.tabIndex}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          border: '2px solid midnightblue',
          outline: 'none'
        }}
      >
        <SelectedGameBorder active={this.props.active}/>
        <div key={this.props.game.key}
          style={{
            color: this.props.active ? 'yellow' : 'orange',
            textAlign: 'center',
            fontSize: 'xx-large'
          }}
        >{this.props.game.name}</div>
        <SelectedGameBorder active={this.props.active}/>
      </div>
    )
  }
}

export default Game;
