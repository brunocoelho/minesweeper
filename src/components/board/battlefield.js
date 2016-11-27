import React, { Component } from 'react';
import Field from './field';
import map from 'lodash/map';

class Battlefield extends Component {
  constructor (props) {
    super(props);
  }

  renderFields () {
    return map(this.props.battlefield, (row, rowIndex) => {
      return (
        <div key={rowIndex}>
          {map(row, (field, colIndex) => {
            return <Field key={colIndex} content={field} revealField={() => this.props.revealField(rowIndex, colIndex)} />
          })}
        </div>
      );
    });
  }

  render () {
    return (
      <div className="battlefield">
        {this.renderFields()}
      </div>
    );
  }
}

export default Battlefield;
