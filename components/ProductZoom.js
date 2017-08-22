import React from 'react'

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
          <a className="close-lightbox"></a>
          <img src={zoom_image} className="Product-image"/>
        </div>
      </div>
    )
  }
}