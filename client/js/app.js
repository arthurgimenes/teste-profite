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

import { Header, HomeSlider } from './components'

class App extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <HomeSlider />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
