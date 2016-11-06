import React, { Component } from 'react';

class Board extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="board">
        <div className="col-md-3">
          Scoreboard
        </div>
        <div className="col-md-9">
          Battlefield
        </div>
      </div>
    );
  }
}

export default Board;
