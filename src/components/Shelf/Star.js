import React, { Component } from 'react';

class Star extends Component {
  render() {
    return (
      <svg className="star" width="13" height="11" viewBox="0 0 13 11" xmlns="http://www.w3.org/2000/svg">
        <path className="star__path" d="M5.70648 8.03684L9.23309 10L8.29722 6.3L11.413 3.81053L7.31 3.48947L5.70648 0L4.10296 3.48947L0 3.81053L3.11574 6.3L2.17988 10L5.70648 8.03684Z" />
      </svg>
    );
  }
}

export default Star;