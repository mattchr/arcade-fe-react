import React, { Component } from 'react';
import './GamesList.css';
import key from 'keymaster';


class Game extends Component {
  render() {
    key('down', this.downArrow)

    return (
        <div className="game-item"
        key={this.props.game.key}
        style={this.props.active ? {
          color: 'blue'
        } : {
          color: 'black'
        }}
        onClick={this.props.onSelected}
        onKeyPress={this.keyDown}
        tabIndex={this.props.tabIndex}
        >
          {this.props.game.name}
        </div>
    )
  }

  downArrow() {
    console.log("sup");
  }
}

class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: null};
  }

  getGames() {
      return [
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
      ]
  }

  selectItem(key) {
    this.setState({activeKey: key})
  }

  keyDown(e) {
    console.log(e.which);
  }
  render() {
    var activeKey = this.state.activeKey || this.getGames()[0].key;
    const listItems = this.getGames().map((game, index) =>
        <Game game={game} key={game.key}
          onSelected={this.selectItem.bind(this, game.key)}
          active={activeKey === game.key}
          tabIndex={index}
        />
    );
    return (
      <div className="GamesList" onKeyPress={this.keyDown}>
        {listItems}
      </div>
    );
  }
}

export default GamesList;
