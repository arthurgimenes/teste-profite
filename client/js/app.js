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

import Header from './components/header'

class App extends Component {
  render() {
    return (
      <Header />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
