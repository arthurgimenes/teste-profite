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

import { Ajax } from '../utils'

const API_URL = 'https://jsonblob.com/api/jsonBlob/57808151e4b0dc55a4e2ec9f'

class ProductsSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      activeSlide: 1,
      totalSlides: 0,
      sliderThreshold: 3,
      sliderFactor: -25
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
    this.updateSliderConfig = this.updateSliderConfig.bind(this)
  }

  componentDidMount() {
    // custom ajax fetch.
    Ajax.fetch(API_URL, (response) => {
      let products = JSON.parse(response)

      this.setState({
        products: products,
        totalSlides: products.length
      })
    })

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

  renderLoading() {
    return (
      <section className="home-products">
        <p className="products-loading">Carregando...</p>
      </section>
    )
  }

  render() {
    let { products, activeSlide, sliderFactor } = this.state

    if (products.length <= 0) {
      return this.renderLoading()
    }

    return (
      <section className="home-products">
        <div className="products-slider">
          <div className="products-container">
            <ul
              className="products-list"
              style={{transform: `translateX(${(activeSlide - 1) * sliderFactor}%)`}}
            >
              {products.map((product, index) => {
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
