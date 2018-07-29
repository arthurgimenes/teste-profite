import React, { Component } from 'react';
import Slider from "react-slick";

class Banner extends Component {
  splitWords(phrase) {
    const splitString = phrase.split(' ');

    return splitString.map((word, i) => (
      <div className="banner__word" key={i}>
        <span className="banner__span">{word}&nbsp;</span>
      </div>
    ));
  }

  render() {
    const settings = {
      easing: 'ease',
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnDotsHover: true,
      pauseOnHover: false,
      dots: true,
      arrows: true,
      speed: 500,
      draggable: false,
      touchMove: false,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            arrows: false,
            draggable: true,
            touchMove: true,
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
                  {this.splitWords('Nossa especialidade: experiência de compra.')}
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