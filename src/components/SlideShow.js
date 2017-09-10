import React, { Component } from 'react';
import SlideShowImages from './SlideShowImages';
import './SlideShow.scss';

class SlideShow extends Component {
  constructor() {
    super()
    this.state = {
      slideIndex: 1
    }
  }

  componentDidMount() {
    this.showSlide(this.state.slideIndex)
  }

  changeSlides(n) {
    this.showSlide(this.state.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlide(this.state.slideIndex = n);
  }

  showSlide(n) {
    const slides = document.querySelectorAll(".slideShow__slide");
    const dots = document.querySelectorAll(".slideShow__dots a");

    if (n > slides.length) {
      this.state.slideIndex = 1
    }

    if (n < 1) {
      this.state.slideIndex = slides.length
    }

    slides.forEach((slide) => {
      slide.style.display = 'none';
    })

    dots.forEach((dot) => {
      dot.className = dot.className.replace(" active", "");
    })

    slides[this.state.slideIndex - 1].style.display = "block";
    dots[this.state.slideIndex - 1].className += " active";
  }

  render() {
    const banners = [
      'banner1.jpg',
      'banner2.jpg',
      'banner3.jpg',
      'banner4.jpg',
      'banner5.jpg'
    ]

    const bannerList = banners.map((banner, index) => {
      return (
        <SlideShowImages banner={banner} key={index}/>
      )
    });

    return (
      <div className="slideShow">

        {bannerList}

        <a className="slideShow__prev" onClick={this.changeSlides.bind(this, -1)}></a>
        <a className="slideShow__next" onClick={this.changeSlides.bind(this, 1)}></a>

        <nav className="slideShow__dots">
          {banners.map((banner, index) => {
            const key = index + 1;
            return (
              <a key={index} onClick={this.currentSlide.bind(this, key)}></a>
            )
          })}
        </nav>
      </div>
    )
  }
}

export default SlideShow;
