import React, { Component } from 'react';
import Rating from './Rating';
import Buy from './Buy';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <a className="product__link" href="/">
          <div className="product__info">
            <figure className="product__figure">
              <img className="product__img"
                src={require("../../assets/img/shelf/product-1.png")}
                alt='Foto do produto "Tênis Couro Puma R698 Q4 V2".'
              />
              <figcaption>
                <h3 className="product__heading">Tênis Couro Puma R698 Q4 V2</h3>
              </figcaption>
            </figure>
            <Rating rating={2} />
            <s className="product__old-price">de R$ 299,00</s>
            <span className="product__price">por R$ 399,00</span>
            <span className="product__instalments">ou em 3x de R$ 133,00</span>
            <div className="product__buy">
              <Buy />
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Product;