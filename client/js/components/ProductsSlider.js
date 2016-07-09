/**
 * components/ProductsSlider.js
 *
 * @copyright Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @author Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @version 0.0.1
 * @since 08-07-2016
 */
'use strict'

import React, { Component } from 'react'

import Product from './Product'

class ProductsSlider extends Component {
  constructor(props) {
    super(props)

    this.products = [
      {
        name: 'Sandália Ferracini Ecologic',
        images: {
          normal: 'images/products/calcado1.png',
          hover: 'images/products/calcado1_hover.png',
          full: 'images/products/calcado1_zoom.png'
        },
        price: 95.92,
        installments: 4
      },
      {
        name: 'Chinelo Kildare',
        images: {
          normal: 'images/products/calcado2.png',
          hover: 'images/products/calcado2_hover.png',
          full: 'images/products/calcado2_zoom.png'
        },
        price: 99.90,
        specialPrice: 79.92,
        installments: 3
      },
      {
        name: 'Tênis Ferracini Week',
        images: {
          normal: 'images/products/calcado3.png',
          hover: 'images/products/calcado3_hover.png',
          full: 'images/products/calcado3_zoom.png'
        },
        price: 229.90,
        specialPrice: 183.92,
        installments: 9
      },
      {
        name: 'Tênis Democrata Fan',
        images: {
          normal: 'images/products/calcado4.png',
          hover: 'images/products/calcado4_hover.png',
          full: 'images/products/calcado4_zoom.png'
        },
        price: 219.90,
        specialPrice: 159.92,
        installments: 7
      },
      {
        name: 'Sandália Ferracini Ecologic 2',
        images: {
          normal: 'images/products/calcado1.png',
          hover: 'images/products/calcado1_hover.png',
          full: 'images/products/calcado1_zoom.png'
        },
        price: 95.92,
        installments: 4
      },
      {
        name: 'Chinelo Kildare 2',
        images: {
          normal: 'images/products/calcado2.png',
          hover: 'images/products/calcado2_hover.png',
          full: 'images/products/calcado2_zoom.png'
        },
        price: 99.90,
        specialPrice: 79.92,
        installments: 3
      },
      {
        name: 'Tênis Ferracini Week 2',
        images: {
          normal: 'images/products/calcado3.png',
          hover: 'images/products/calcado3_hover.png',
          full: 'images/products/calcado3_zoom.png'
        },
        price: 229.90,
        specialPrice: 183.92,
        installments: 9
      },
      {
        name: 'Tênis Democrata Fan 2',
        images: {
          normal: 'images/products/calcado4.png',
          hover: 'images/products/calcado4_hover.png',
          full: 'images/products/calcado4_zoom.png'
        },
        price: 219.90,
        specialPrice: 159.92,
        installments: 7
      }
    ]

    this.state = {
      activeSlide: 1,
      totalSlides: this.products.length,
      sliderThreshold: 3,
      sliderFactor: -25
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
    this.updateSliderConfig = this.updateSliderConfig.bind(this)
  }

  componentDidMount() {
    this.updateSliderConfig()
    window.addEventListener('resize', this.updateSliderConfig)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSliderConfig)
  }

  updateSliderConfig() {
    if (window.innerWidth < 641) {
      this.setState({
        sliderThreshold: 1,
        sliderFactor: -50
      })
    } else if (window.innerWidth < 1025) {
      this.setState({
        sliderThreshold: 2,
        sliderFactor: -33.33
      })
    } else {
      this.setState({
        sliderThreshold: 3,
        sliderFactor: -25
      })
    }
  }

  previousSlide() {
    let { activeSlide, sliderThreshold, totalSlides } = this.state

    this.setState({
      activeSlide: (activeSlide === 1)
        ? totalSlides - sliderThreshold
        : (activeSlide - 1)
    })
  }

  nextSlide() {
    let { activeSlide, sliderThreshold, totalSlides } = this.state

    this.setState({
      activeSlide: (activeSlide + sliderThreshold === totalSlides)
        ? 1
        : (activeSlide + 1)
    })
  }

  render() {
    let { activeSlide, sliderFactor } = this.state

    return (
      <section className="home-products">
        <div className="products-slider">
          <div className="products-container">
            <ul
              className="products-list"
              style={{transform: `translateX(${(activeSlide - 1) * sliderFactor}%)`}}
            >
              {this.products.map((product, index) => {
                return <Product key={index} product={product} />
              })}
            </ul>
          </div>
          <a className="slider-nav prev" href="javascript:;" onClick={this.previousSlide}>Anterior</a>
          <a className="slider-nav next" href="javascript:;" onClick={this.nextSlide}>Próximo</a>
        </div>
      </section>
    )
  }
}

export default ProductsSlider
