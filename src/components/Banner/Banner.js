import React, { Component } from 'react';
import Slider from "react-slick";

class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: false,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            arrows: false,
            swipeToSlide: true,
          }
        },
      ]
    };

    return (
      <div className="banner">

        <Slider {...settings}>

          <div>
            <div className="banner__slide">
              <div className="banner__bg">
                <div className="banner__spacer"></div>
                <div className="banner__img"
                  style={{
                    backgroundImage: "url(" + require("../../assets/img/banner/carousel-1.png") + ")"
                  }}
                ></div>
              </div>
              <div className="container banner__container">
                <h3 className="banner__heading">
                  Nossa especialidade: experiência de compra.
                </h3>
              </div>
            </div>
          </div>

          <div>
            <div className="container banner__container">
              <h3 className="banner__heading">
                2
              </h3>
            </div>
          </div>
          <div>
            <div className="container banner__container">
              <h3 className="banner__heading">
                3
              </h3>
            </div>
          </div>
          <div>
            <div className="container banner__container">
              <h3 className="banner__heading">
                4
              </h3>
            </div>
          </div>
        </Slider>

      </div>
    );
  }
}

export default Banner;