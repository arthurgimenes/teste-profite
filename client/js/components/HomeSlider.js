/**
 * components/HomeSlider.js
 *
 * @copyright Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @author Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @version 0.0.1
 * @since 07-07-2016
 */
'use strict'

import React, { Component } from 'react'

class HomeSlider extends Component {
  constructor(props) {
    super(props)

    this.banners = [
      {
        link: '#banner1',
        mobile: 'images/banners/banner1_mobile.jpg',
        desktop: 'images/banners/banner1.jpg'
      },
      {
        link: '#banner2',
        mobile: 'images/banners/banner2_mobile.jpg',
        desktop: 'images/banners/banner2.jpg'
      },
      {
        link: '#banner3',
        mobile: 'images/banners/banner3_mobile.jpg',
        desktop: 'images/banners/banner3.jpg'
      },
      {
        link: '#banner4',
        mobile: 'images/banners/banner4_mobile.jpg',
        desktop: 'images/banners/banner4.jpg'
      },
      {
        link: '#banner5',
        mobile: 'images/banners/banner5_mobile.jpg',
        desktop: 'images/banners/banner5.jpg'
      }
    ]

    this.state = {
      activeSlide: 1,
      totalSlides: this.banners.length
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
    this.goToSlide = this.goToSlide.bind(this)
  }

  componentDidMount() {
    this.setImages()
    window.addEventListener('resize', this.setImages)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setImages)
  }

  setImages() {
    let htmlBanners = [].slice.call(document.getElementsByClassName('slider-banner'))
    let deviceAttr = (window.innerWidth > 1024) ? 'data-desktop' : 'data-mobile'

    htmlBanners.forEach(banner => {
      banner.src = banner.getAttribute(deviceAttr)
    })
  }

  previousSlide(event) {
    event.preventDefault()

    this.setState({
      activeSlide: (this.state.activeSlide === 1) ? this.state.totalSlides : (this.state.activeSlide - 1)
    })
  }

  nextSlide(event) {
    event.preventDefault()

    this.setState({
      activeSlide: (this.state.activeSlide === this.state.totalSlides) ? 1 : (this.state.activeSlide + 1)
    })
  }

  goToSlide(slide) {
    this.setState({
      activeSlide: slide
    })
  }

  render() {
    let bullets = []

    return (
      <section className="home-banners">
        <div className="home-slider">
          <div className="slides-container">
            <ul
              className="slides-list"
              style={{transform: `translateX(${(this.state.activeSlide - 1) * -100}%)`}}
            >
              {this.banners.map((banner, index) => {
                bullets.push(
                  <a
                    key={index}
                    className={(this.state.activeSlide === (index + 1)) ? 'active' : ''}
                    href="javascript:;"
                    onClick={() => this.goToSlide(index + 1)}
                  >
                    slide {index}
                  </a>
                )

                return (
                  <li key={index} className="slider-item">
                    <a href={banner.link}>
                      <img className="slider-banner" data-mobile={banner.mobile} data-desktop={banner.desktop} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <nav className="bullets">{bullets}</nav>
          <a className="slider-nav prev" href="#" onClick={this.previousSlide}>Anterior</a>
          <a className="slider-nav next" href="#" onClick={this.nextSlide}>Próximo</a>
        </div>
      </section>
    )
  }
}

export default HomeSlider
