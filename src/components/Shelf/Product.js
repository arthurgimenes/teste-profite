import React, { Component } from 'react';
import Rating from './Rating';
import Buy from './Buy';

class Product extends Component {
  render() {
    const product = this.props.product;

    return (
      <div className="product">
        <a className="product__link" href="/">
          <div className={
            product.oldPrice
              ? "product__info product__info--off"
              : "product__info"
          }>
            <figure className="product__figure">
              <img className="product__img"
                src={require("../../assets/img/shelf/" + product.image)}
                alt={'Foto do produto "' + product.title + '"'}
              />
              <figcaption>
                <h3 className="product__heading">{product.title}</h3>
              </figcaption>
            </figure>
            <Rating rating={product.rating} />
            {product.oldPrice
              ? <s className="product__old-price">de R$ {product.oldPrice.toFixed(2)}</s>
              : null
            }
            <span className="product__price">
              {product.oldPrice
                ? <span>por </span>
                : null
              }
              R$ {product.price.toFixed(2)}
            </span>
            {product.instalments
              ? <span className="product__instalments">ou em {product.instalments}x de R$ {(product.price / product.instalments).toFixed(2)}</span>
              : null
            }
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