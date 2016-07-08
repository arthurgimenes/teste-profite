/**
 * app.js
 *
 * @copyright Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @author Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @version 0.0.1
 * @since 07-07-2016
 */
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import { Header, Footer, HomeSlider } from './components'

const App = () => {
  return (
    <div className="page">
      <Header />
      <HomeSlider />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
