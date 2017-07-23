import React, { Component } from 'react';
import KeyHandler, {KEYUP} from 'react-key-handler';
import Game from './game';

class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: this.props.games[0].key
    };
  }

  selectItem(key) {
    if (this.state.activeKey !== key) {
      this.setState({activeKey: key})
      return;
    }

    this.launchGame(this.state.activeKey);
  }

  render() {
    var activeKey = this.state.activeKey || this.props.games[0].key;
    const listItems = this.props.games.map((game, index) =>
        <Game game={game} key={game.key}
          onSelected={this.selectItem.bind(this, game.key)}
          active={activeKey === game.key}
          tabIndex={index}
        />
    );
    return (
      <div>
        <KeyHandler keyEventName={KEYUP} keyValue="ArrowDown" onKeyHandle={this.downArrow.bind(this)} />
        <KeyHandler keyEventName={KEYUP} keyValue="ArrowUp" onKeyHandle={this.upArrow.bind(this)} />
        <KeyHandler keyEventName={KEYUP} keyValue="Enter" onKeyHandle={this.enterKey.bind(this)} />
        <div className="GamesList">
          {listItems}
        </div>
      </div>
    );
  }

  getSelectedGameIndex() {
    return this.props.games.findIndex(game => {
      return game.key === this.state.activeKey
    })
  }

  downArrow() {
    var selectedIndex = this.getSelectedGameIndex()
    var next = this.props.games[selectedIndex + 1]
    if (next) {
      this.setState({activeKey: next.key})
    }
  }

  upArrow() {
    var selectedIndex = this.getSelectedGameIndex()
    if (selectedIndex === 0) {
      return
    }
    var previous = this.props.games[selectedIndex - 1]
    this.setState({activeKey: previous.key})
  }

  enterKey() {
    this.launchGame(this.state.activeKey);
  }

  launchGame(game_key) {
    console.log(game_key)
  }
}

export default GamesList;
