import React, { Component } from 'react';
import Slider from "react-slick";
import Product from './Product';

class Shelf extends Component {
  render() {
    const settings = {
      useCSS: false,
      useTransform: false,
      // autoplay: true,
      autoplaySpeed: 4000,
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

    return (
      <div className="shelf">
        <div className="container">
          <h2 className="shelf__heading">Produtos</h2>
        </div>

        <div className="shelf__slider">
          <Slider {...settings}>

            <Product />
            <Product />
            <Product />
            <Product />

            <div><h3>5</h3></div>
            <div><h3>6</h3></div>
            <div><h3>7</h3></div>
            <div><h3>8</h3></div>

          </Slider>

        </div>
      </div>
    );
  }
}

export default Shelf;