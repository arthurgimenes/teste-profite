import React from 'react'
import Product from './Product'

export default class ProductList extends React.Component {
  render () {
    const { products } = this.props
    return (
      <div>
      {
        products.map( product => 
          <Product
            key={product.SKU}
            name={product.name}
            price_old={product.price_old}
            price_actual={product.price}
            price_splitted={product.price_splitted}
            image={product.image_url}
            image_zoom={product.zoom_image}
          />
        )
      }
      </div>
    )
  }
}