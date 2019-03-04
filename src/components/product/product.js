import React, { Component } from 'react';
import './product.scss';
import IconBuy from '../../images/buy.png';
import FlagOff from '../../images/Flag.png';
import StarTrue from '../../images/star-true.png';
import StarFalse from '../../images/star-false.png';

class Product extends Component {

  render() {
    return ( 
    <div className="product">
      {this.props.product.off?<div className="flag-off" style={{backgroundImage: `url(${FlagOff})`}}></div> : ''}
      <div className="product-image" style={{backgroundImage: `url(${this.props.product.image})`}}></div>
      <div className="product-name">{this.props.product.productName}</div>
      <div className="product-stars">
        <div className="product-star"  style={{backgroundImage: `url(${this.props.product.stars > 0? StarTrue : StarFalse})`}}></div>
        <div className="product-star"  style={{backgroundImage: `url(${this.props.product.stars > 1? StarTrue : StarFalse})`}}></div>
        <div className="product-star"  style={{backgroundImage: `url(${this.props.product.stars > 2? StarTrue : StarFalse})`}}></div>
        <div className="product-star"  style={{backgroundImage: `url(${this.props.product.stars > 3? StarTrue : StarFalse})`}}></div>
        <div className="product-star"  style={{backgroundImage: `url(${this.props.product.stars > 4? StarTrue : StarFalse})`}}></div>
      </div>
      <div className="product-old-price">de {this.props.product.originalPrice}</div>
      <div className="product-price">por R${this.props.product.price}</div>
      <div className="product-price-sub">ou em 3x de R${parseInt(this.props.product.price)/3}</div>
      <div className="product-button" style={{backgroundImage: `url(${IconBuy})`}}>comprar</div>
    </div>
    );
  }
}

export default Product;
