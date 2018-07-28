import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <button className="cart__button" aria-label="Meu Carrinho">
          <img className="cart__img"
            src={require("../../assets/img/header/cart.svg")}
            alt="Meu Carrinho"
          />
          <div className="cart__label">
            <span className="cart__label-span">0</span>
          </div>
        </button>
      </div>
    );
  }
}

export default Cart;