import React from 'react';
import '../../scss/common.scss';

const Buttons = ({value, element, id}) => (
  <button className={id}>
    {element}
    {value}
  </button>
)

export default Buttons;
