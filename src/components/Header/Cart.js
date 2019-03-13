import React, { Component } from 'react';
import CartIcon from './CartIcon';

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <button className="cart__button" aria-label="Meu Carrinho">
          <div className="cart__icon">
            <CartIcon />
          </div>
          <div className="cart__label">
            <span className="cart__label-span">0</span>
          </div>
        </button>
      </div>
    );
  }
}

export default Cart;