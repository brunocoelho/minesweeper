import React from 'react';
import '../../assets/css/battlefield.css';

function Field ({content, revealField}) {
  if (content.show) {
    let className = `field field-${content.value}`;
    return <button className={className} />
  }
  else {
    return <button className="field pristine" onClick={revealField} />
  }
}

export default Field;
