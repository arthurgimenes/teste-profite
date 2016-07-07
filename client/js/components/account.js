/**
 * components/account.js
 *
 * @copyright Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @author Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @version 0.0.1
 * @since 07-07-2016
 */
'use strict'

import React, { Component } from 'react'

class Account extends Component {
  render() {
    return (
      <div className="header-account">
        <strong>Olá, Visitante</strong><br />
        <span>
          <a href="#">Cadastre-se</a> - <a href="#">Login</a>
        </span>
      </div>
    )
  }
}

export default Account
