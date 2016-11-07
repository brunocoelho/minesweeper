import React from 'react';

function Field (props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.content.value}
    </button>
  );
}

export default Field;
