import React, { Component } from 'react';

class SelectedGameBorder extends Component {
  render() {
    var style = {
        position: 'relative',
        top: '9px',
        flexGrow: 1,
        margin: '0 10px 0 10px'
    }

    if (this.props.active) {
      style.borderTop = '20px dotted yellow'
    }

    return (
      <div
        style={style}
      />
    )
  }
}

export default SelectedGameBorder;
