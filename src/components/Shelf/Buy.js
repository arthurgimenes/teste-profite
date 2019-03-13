import React, { Component } from 'react';
import BuyIcon from './BuyIcon';

class Buy extends Component {
  render() {
    return (
      <div className="buy">
        <button className="button buy__button">
          <div className="buy__icon">
            <BuyIcon />
          </div>
          <span className="button__span buy__span">Comprar</span>
        </button>
      </div>
    );
  }
}

export default Buy;