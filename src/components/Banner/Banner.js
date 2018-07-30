import React, { Component } from 'react';
import Slider from "react-slick";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      slides: [],
      bannerHeight: "auto"
    };
  }

  updateBannerHeight() {
    const bannerHeight = document.getElementById("banner").clientHeight;
    const containers = document.getElementsByClassName("banner__container");

    for (let index = 0; index < containers.length; index++) {
      containers[index].setAttribute("style", "height: " + bannerHeight + "px");
    }
  }

  componentDidMount() {
    fetch("/api/banner.json")
      .then(res => res.json())
      .then(
        (result) => { this.setState({ slides: result }); },
        (error) => { this.setState({ error }); }
      );

    window.addEventListener('resize', this.updateBannerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateBannerHeight);
  }

  componentDidUpdate() {
    this.updateBannerHeight();
  }

  splitWords(phrase) {
    const splitString = phrase.split(' ');

    return splitString.map((word, i) => (
      <div className="banner__word" key={i}>
        <span className="banner__span">{word}&nbsp;</span>
      </div>
    ));
  }

  render() {
    const slides = this.state.slides;
    const error = this.state.error;
    // const bannerHeight = this.state.bannerHeight;
    const settings = {
      useCSS: false,
      useTransform: false,
      // autoplay: true,
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

    if (error) console.log(error.message);

    return (
      <div className="banner" id="banner">

        <Slider {...settings}>

          {slides.map(slide => (
            <div key={slide.id} className="banner__slide">
              <div className="banner__bg">
                <div className="banner__spacer"></div>
                <div className="banner__img"
                  style={{
                    backgroundImage: "url(" +
                      require("../../assets/img/banner/" + slide.image)
                      + ")"
                  }}
                ></div>
              </div>
              <div className="container banner__container">
                <h3 className="banner__heading">
                  {this.splitWords(slide.title)}
                </h3>
              </div>
            </div>
          ))}

        </Slider>

      </div>
    );
  }
}

export default Banner;