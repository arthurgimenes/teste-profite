/**
 * components/Product.js
 *
 * @copyright Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @author Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @version 0.0.1
 * @since
 */
'use strict'

import React, { Component } from 'react'

import { SvgIcon } from '../utils'

function convertToCurrency(value) {
  let roundedValue = Math.floor(value * 100) / 100
  return `R$ ${roundedValue.toFixed(2).toString().replace('.', ',')}`
}

class Product extends Component {
  constructor(props) {
    super(props)

    this.zoomEvent =
    this.zoomImage = this.zoomImage.bind(this)
  }

  zoomImage() {
    let { product } = this.props

    let zoomEvent = new CustomEvent('zoom-image', { detail: product.images.full })
    window.dispatchEvent(zoomEvent)
  }

  renderPrice() {
    let { product } = this.props

    let oldPrice
    let finalPrice = product.price

    if (product.specialPrice) {
      finalPrice = product.specialPrice
      oldPrice = <p className="product-old-price">De: {convertToCurrency(product.price)}</p>
    }

    let productPrice = convertToCurrency(finalPrice)
    let installmentsPrice = convertToCurrency(finalPrice / product.installments)

    return (
      <div className="product-price-box">
        {oldPrice}
        <p className="product-price">
          <strong>Por: <em>{productPrice}</em></strong>
        </p>
        <p className="product-installments">
          <em>ou <strong>até {product.installments}X</strong> de {installmentsPrice}</em>
        </p>
      </div>
    )
  }

  renderSavings() {
    let { product } = this.props

    if (product.specialPrice) {
      let priceSaved = convertToCurrency(product.price - product.specialPrice)

      return (
        <p className="product-savings">Economize: {priceSaved}</p>
      )
    } else {
      return (
        <p className="product-savings">Economize: R$ 43,98</p>
      )
    }
  }

  render() {
    let { product } = this.props

    return (
      <li>
        <a
          className="product-image"
          href="javascript:;"
          onClick={this.zoomImage}
        >
          <img src={product.images.hover} />
          <img className="image-hover" src={product.images.normal} />
        </a>
        <p className="product-name">{product.name}</p>
        <div className="star-rating">
          <SvgIcon icon="star" />
          <SvgIcon icon="star" />
          <SvgIcon icon="star" />
          <SvgIcon icon="star" />
          <SvgIcon icon="star" />
        </div>
        {this.renderPrice()}
        <a className="product-buy" href="#buy-product">
          <SvgIcon icon="cart" />
          <span>Comprar</span>
        </a>
        {this.renderSavings()}
      </li>
    )
  }
}

export default Product
