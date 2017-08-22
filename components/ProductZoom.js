import React from 'react'
import {closeLightbox} from '../utils'

export default class ProductZoom extends React.Component {

  render() {
    const {
      sku, 
      zoom_image
    } = this.props
  
    return ( 
      <div 
      className="Product-zoom"
      id={sku}>
        <div className="Product-zoom-overlay" />
        <div className="Product-zoom-content">            
          <a 
            href="#" className="Product-zoom-close-lightbox"
            onClick={(e) => {closeLightbox(e)}}
          >
            <img src="/static/image/products/fechar.png" />
          </a>
          <img src={zoom_image} className="Product-image"/>
        </div>
      </div>
    )
  }
}