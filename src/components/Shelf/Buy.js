import React, { Component } from 'react';

class Buy extends Component {
  render() {
    return (
      <div className="buy">
        <button className="button buy__button">
          <img className="buy__img"
            src={require("../../assets/img/shelf/buy.svg")}
            alt="Adicionar ao Carrinho"
          />
          <span className="button__span buy__span">Comprar</span>
        </button>
      </div>
    );
  }
}

export default Buy;