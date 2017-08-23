import React from 'react'
import { saveCalc, openLightbox } from '../utils'

export default class Product extends React.Component {

  render () {
    const {
      sku,
      name,
      price_old,
      price_actual,
      price_splitted,
      image,
      image_zoom,
      dataIndex
    } = this.props

    return (
      <div 
        className="Product" 
        data-index={dataIndex}
        onClick={(e) => openLightbox(e, sku)}
      >
        <div className={`Product-detail product-${dataIndex}`}>
          <div className="Product-header">
            <img 
              src={image} 
              className="Product-image"
            />
            <h3 className="Product-name">
              {name}
            </h3>
          </div>
          <div className="Product-info">
            <div className="Product-rating">
              <img src="/static/image/products/rating.png"/>
            </div>
            <div className="Product-price">
              <p className="Product-price-old">
                {
                  price_old &&

                  `De ${price_old}`
                }
              </p>
              <p className="Product-price-actual">
                <strong> Por <em>{price_actual}</em> </strong>
              </p>
              <p className="Product-price-splitted">
                <em> ou até <strong>{price_splitted}</strong> </em>
              </p>
            </div>
            <button className="Product-buy">
              Comprar
            </button>
          </div>
        </div>
        {
          price_old &&
          
          <div className="Product-saving-flag">
            Economize: {saveCalc(price_old, price_actual)}
          </div>
        }
        
      </div>
    )
  }
}
