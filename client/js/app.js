/**
 * app.js
 *
 * @copyright Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @author Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @version 0.0.1
 * @since 07-07-2016
 */
'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Header, Footer, HomeSlider, ProductsSlider } from './components'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      zoom: false,
      zoomImage: ''
    }

    this.closeZoom = this.closeZoom.bind(this)
  }

  componentDidMount() {
    window.addEventListener('zoom-image', (event) => {
      this.setState({
        zoom: true,
        zoomImage: event.detail
      })
    })
  }

  componentWillUnmount() {
    window.removeEventListener('zoom-image', () => {})
  }

  closeZoom() {
    this.setState({
      zoom: false,
      zoomImage: ''
    })
  }

  renderZoom() {
    if (this.state.zoom) {
      return (
        <div className="zoom-box">
          <div className="zoom-overlay" onClick={this.closeZoom}></div>
          <div className="zoom-image-box">
            <a
              href="javascript:;"
              className="zoom-close"
              onClick={this.closeZoom}
            >
              Fechar
            </a>
            <img className="zoom-image" src={this.state.zoomImage} />
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="page">
        <Header />
        <HomeSlider />
        <ProductsSlider />
        <Footer />
        {this.renderZoom()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
