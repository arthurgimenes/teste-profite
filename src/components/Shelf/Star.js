import React, { Component } from 'react';

class Star extends Component {
  render() {
    const filled = this.props.filled;

    return (
      <svg className="star" width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={
          filled
            ? 'star__path star__path--filled'
            : 'star__path'
        }
          fillRule="evenodd" clipRule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C" />
      </svg>
    );
  }
}

export default Star;