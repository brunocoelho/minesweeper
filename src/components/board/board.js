import React, { Component } from 'react';
import Battlefield from './battlefield';
import Scoreboard from './scoreboard';
import Shuffling from '../../utils/shuffling';
import Matrix from '../../utils/matrix';
import { positions } from '../../constants';

class Board extends Component {
  constructor (props) {
    super(props);
    this.state = {
      battlefield: undefined
    };
    this.revealField = this.revealField.bind(this);
  }

  revealFieldsRecursively (battlefield, rowIndex, colIndex) {
    positions.forEach((position) => {
      let newRowIndex = rowIndex + position[0];
      let newColIndex = colIndex + position[1];
      let field = battlefield[newRowIndex] ? battlefield[newRowIndex][newColIndex] : undefined;
      if (field && !field.show) {
        if (field.value === 0) {
          field.show = true;
          battlefield = this.revealFieldsRecursively(battlefield, newRowIndex, newColIndex);
        }
        else if (field.value !== 'BOMB') {
          field.show = true;
        }
      }
    });

    return battlefield;
  }

  revealField (rowIndex, colIndex) {
    let battlefield = [...this.state.battlefield];
    let field = battlefield[rowIndex][colIndex];

    field.show = true;

    if (field.value === 0) {
      battlefield = this.revealFieldsRecursively(battlefield, rowIndex, colIndex);
    }

    this.setState({
      battlefield: battlefield
    })
  }

  getBattlefield () {
    let battlefield = new Shuffling();
    return new Matrix(battlefield);
  }

  componentDidMount () {
    let { base } = this.props;
    let battlefield = this.getBattlefield();
    // this.setState({
    //   battlefield: battlefield
    // });

    base.post('battlefield', {
      data: { battlefield }
    });

    this.ref = base.syncState('battlefield', {
      context: this,
      state: 'battlefield',
      asArray: true
      // then() {
      //   this.setState({ loading: false})
      // }
    });
  }

  componentWillUnmount(){
    this.props.base.removeBinding(this.ref);
  }

  render () {
    return (
      <div className="board">
        <div className="col-md-3">
          <Scoreboard />
        </div>
        <div className="col-md-9">
          <Battlefield battlefield={this.state.battlefield} revealField={this.revealField} />
        </div>
      </div>
    );
  }
}

export default Board;
