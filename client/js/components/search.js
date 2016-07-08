/**
 * compoenents/Search.js
 *
 * @copyright Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @author Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @version 0.0.1
 * @since 07-07-2016
 */
'use strict'

import React, { Component } from 'react'

import { SvgIcon } from '../utils'

class Search extends Component {
  render() {
    return (
      <div className="header-search">
        <button className="search-button">
          <SvgIcon icon="search" />
        </button>
        <input className="search-input" type="text" name="query" placeholder="Buscar por..." />
      </div>
    )
  }
}

export default Search
