import React, { Component } from 'react';
import Field from './field';

class Battlefield extends Component {
  constructor (props) {
    super(props);
  }

  renderFields () {
    return this.props.battlefield.map((row, rowIndex) => {
      return (
        <div key={rowIndex}>
          {row.map((field, colIndex) => {
            return <Field key={colIndex} content={field} revealField={() => this.props.revealField(rowIndex, colIndex)} />
          })}
        </div>
      );
    });
  }

  render () {
    return (
      <div className="battlefield">
        {this.props.battlefield && this.renderFields()}
      </div>
    );
  }
}

export default Battlefield;
