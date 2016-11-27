import React, { Component } from 'react';
import Battlefield from './battlefield';
import Scoreboard from './scoreboard';
import Shuffling from '../../utils/shuffling';
import Matrix from '../../utils/matrix';
import { positions } from '../constants';

class Board extends Component {
  constructor (props) {
    super(props);
    this.state = {
      battlefield: undefined
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    console.log('clicked');
  }

  getBattlefield () {
    let battlefield = new Shuffling();
    return new Matrix(battlefield);
  }

  componentDidMount () {
    let battlefield = this.getBattlefield();
    this.setState({
      battlefield: battlefield
    });
    console.log(battlefield);
  }

  render () {
    return (
      <div className="board">
        <div className="col-md-3">
          <Scoreboard />
        </div>
        <div className="col-md-9">
          <Battlefield battlefield={this.state.battlefield} onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Board;
