import React, { Component } from 'react';
import Star from './Star';

class Rating extends Component {
  listItems(rating) {
    let stars = [];
    const maxRating = 5;

    for (let index = 0; index < rating; index++) {
      stars.push(
        <li key={index} className="rating__list-item">
          <Star filled={true} />
        </li>
      );
    }

    for (let index = rating; index < maxRating; index++) {
      stars.push(
        <li key={index} className="rating__list-item">
          <Star filled={false} />
        </li>
      );
    }

    return stars;
  }

  render() {
    const rating = this.props.rating;

    return (
      <div className="rating">
        <ul className="rating__list">
          {this.listItems(rating)}
        </ul>
      </div>
    );
  }
}

export default Rating;