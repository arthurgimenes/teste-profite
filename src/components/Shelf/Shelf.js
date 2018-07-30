import React, { Component } from 'react';
import Slider from "react-slick";
import Buy from './Buy';

class Shelf extends Component {
  render() {
    const settings = {
      infinite: false,
      easing: 'ease',
      autoplay: true,
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

            <div>
              <div className="shelf__product">
                <figure className="shelf__figure">
                  <img className="shelf__img"
                    src={require("../../assets/img/shelf/product-1.png")}
                    alt="Foto do Tênis Couro Puma R698 Q4 V2."
                  />
                  <figcaption>
                    <h3 className="shelf__product-heading">Tênis Couro Puma R698 Q4 V2</h3>
                  </figcaption>
                </figure>
                <s className="shelf__old-price">de R$ 299,00</s>
                <span className="shelf__price">por R$ 399,00</span>
                <span className="shelf__instalments">ou em 3x de R$ 133,00</span>

                <Buy />
              </div>
            </div>

            <div>
              <div className="shelf__product">
                <figure className="shelf__figure">
                  <img className="shelf__img"
                    src={require("../../assets/img/shelf/product-1.png")}
                    alt="Foto do Tênis Couro Puma R698 Q4 V2."
                  />
                  <figcaption>
                    <h3 className="shelf__product-heading">Tênis Couro Puma R698 Q4 V2</h3>
                  </figcaption>
                </figure>
                <s className="shelf__old-price">de R$ 299,00</s>
                <span className="shelf__price">por R$ 399,00</span>
                <span className="shelf__instalments">ou em 3x de R$ 133,00</span>

                <Buy />
              </div>
            </div>

            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
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