import React from 'react'
import Product from './Product'
import ProductZoom from './ProductZoom'
import Slider from 'react-slick'

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <img
      src="/static/image/products/seta_direita.png"
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
    />
    );
  }

  function PrevArrow(props) {
    const {className, style, onClick} = props
    return (
      <img
        src="/static/image/products/seta_esquerda.png"
        className={className}
        style={{...style, display: 'block'}}
        onClick={onClick}
      />
  );
}

export default class ProductList extends React.Component {
  render () {
    const { products } = this.props
    const  settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [ { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    }

    return (
      <div className="Product-list">
        <div className="Product-list-container">
          <Slider {...settings}>
          {
            products.map( (product, index) => 
              <Product
                key={product.SKU}
                sku={product.SKU}
                name={product.name}
                price_old={product.price_old}
                price_actual={product.price}
                price_splitted={product.price_splitted}
                image={product.image_url}
                image_zoom={product.zoom_image}
                dataIndex={index}
              />
            )
          }
          </Slider>
        </div>
        {
          products.map( (product, index) => 
            <ProductZoom
              sku={product.SKU}
              key={`${product.SKU}-${index}`}
              zoom_image={product.zoom_image}
            />
          )
        }
      </div>
    )
  }
}