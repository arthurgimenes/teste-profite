/**
 * components/header.js
 *
 * @copyright Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @author Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @version 0.0.1
 * @since 07-07-2016
 */
'use strict'

import React from 'react'

import Account from './account'
import Search from './search'

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-logo">
          <h1>
            <a href="/" title="Profite" className="header-logo-image">Profite</a>
          </h1>
        </div>
        <Account />
        <Search />
        <div className="header-actions">
          <div className="flags">
            <a href="#ptBR"><img src="images/bandeira1.png" alt="Português - Brasil" /></a>
            <a href="#ag"><img src="images/bandeira2.png" alt="Argentina" /></a>
            <a href="#pe"><img src="images/bandeira3.png" alt="Peru" /></a>
          </div>
          <a href="tel:+551133375618" className="phone">
            <img src="images/skype.png" alt="Skype" />
            <span>11 3337-5618</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
