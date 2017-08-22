import React from 'react'
import { saveCalc } from '../utils'

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
      >
        <div className="Product-detail">
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
            {
            price_old &&
            
            <div className="Product-saving-flag">
              Economize: {saveCalc(price_old, price_actual)}
            </div>
            }
          </div>
        </div>
        
      </div>
    )
  }
}
