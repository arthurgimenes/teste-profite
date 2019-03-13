import React, { Component } from 'react';
import Slider from "react-slick";
import Product from './Product';

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      products: []
    };
  }

  componentDidMount() {
    fetch("/api/shelf.json")
      .then(res => res.json())
      .then(
        (result) => { this.setState({ products: result }); },
        (error) => { this.setState({ error }); }
      );
  }

  render() {
    const products = this.state.products;
    const error = this.state.error;
    const settings = {
      useCSS: false,
      useTransform: false,
      autoplay: true,
      autoplaySpeed: 3333,
      pauseOnHover: true,
      dots: false,
      arrows: true,
      speed: 500,
      draggable: false,
      touchMove: false,
      slidesToScroll: 4,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            dots: true,
            arrows: false,
            draggable: true,
            touchMove: true,
            slidesToScroll: 2,
            slidesToShow: 2
          }
        },
      ]
    };

    if (error) console.log(error.message);

    return (
      <div className="shelf">
        <div className="container">
          <h2 className="shelf__heading">Produtos</h2>
        </div>

        <div className="shelf__slider">
          <Slider {...settings}>

            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}

          </Slider>

        </div>
      </div>
    );
  }
}

export default Shelf;