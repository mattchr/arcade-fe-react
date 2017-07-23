import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import KeyHandler, {KEYUP} from 'react-key-handler';
import axios from 'axios';
import _ from 'lodash';

import Game from '../components/game';
import { launchGame, addGames } from '../actions/index';

class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: this.props.games[0] ? this.props.games[0].key : 'a'
    };

    axios.get('http://localhost:5000/api/v1/roms/list').then(response => {
      this.props.addGames(response.data);
    });

  }

  selectItem(key) {
    if (this.state.activeKey !== key) {
      this.setState({activeKey: key})
      return;
    }

    this.launchGame(this.state.activeKey);
  }

  render() {
    const activeKey = this.state.activeKey || this.props.games[0].key;
    console.log(activeKey);
    const fourGames = this.getFourGames(this.props.games, activeKey);
    const listItems = fourGames.map((game, index) =>
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
        <div style={{
          position: 'fixed'
        }}>
          <div>
            {listItems}
          </div>
        </div>
      </div>
    );
  }

  getFourGames(all_games, selected_key) {
    if (all_games.length <= 4) {
      return all_games;
    }

    const selected_index = _.findIndex(all_games, game => {return game.key === selected_key});
    if (selected_index == 0) {
      return all_games.slice(0, 4);
    }
    if (selected_index === all_games.length-1) {
      return all_games.slice(Math.max(0, all_games.length - 4), all_games.length);
    }

    const one_less = all_games.slice(1);
    if (one_less.length === 4) {
      return one_less;
    }

    return this.getFourGames(one_less);
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
    this.props.launchGame(game_key)
  }
}

function mapStateToProps(state, props) {
  return {
    games: state.games
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ launchGame, addGames }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);
