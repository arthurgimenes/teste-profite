import React, { Component } from 'react';
import Star from './Star';

class Rating extends Component {
  render() {
    return (
      <div className="rating">
        <ul className="rating__list">
          <li className="rating__list-item"><Star /></li>
          <li className="rating__list-item"><Star /></li>
          <li className="rating__list-item"><Star /></li>
          <li className="rating__list-item"><Star /></li>
          <li className="rating__list-item"><Star /></li>
        </ul>
      </div>
    );
  }
}

export default Rating;