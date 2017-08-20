import React from 'react'

export default class Product extends React.Component {

  render () {
    const {
      name,
      price_old,
      price_actual,
      price_splitted,
      image,
      image_zoom
    } = this.props

    return (
      <div className="Product">
        <div className="Product-detail">
          <div className="Product-header">
            <img src={image} className="Product-image"/>
            <h3 className="Product-name">
              {name}
            </h3>
          </div>
          <div className="Product-info">
            <div className="Product-rating">
              <img src="../image/rating.png"/>
            </div>
            <div className="Product-price">
            {
              price_old &&
              <p className="Product-price-old">
                de {price_old}
              </p>
            }
              <p className="Product-price-actual">
                por {price_actual}
              </p>
              <p className="Product-price-splitted">
                ou até {price_splitted}
              </p>
            </div>
            <button className="Product-buy">
              Comprar
            </button>
          </div>
        </div>
        <div className="Product-zoom">
          <a className="close-lightbox"></a>
          <img src={image_zoom} className="Product-image"/>
        </div>
      </div>
    )
  }
}
