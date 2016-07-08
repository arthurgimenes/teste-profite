/**
 * components/Footer.js
 *
 * @copyright Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @author Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @version 0.0.1
 * @since 08-07-2016
 */
'use strict'

import React, { Component } from 'react'

import { SvgIcon } from '../utils'

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="container">
          <div className="widget-address">
            <span className="state">RJ</span>
            <address className="address">
              Rua do acre, 77 - sala 1108<br />
              Centro - Rio de Janeiro<br />
              <a href="tel:+552122636044" className="phone">tel.: +55 (21) 2263.6044</a>
            </address>
          </div>
          <div className="widget-address">
            <span className="state">SP</span>
            <address className="address">
              Rua Cardoso de melo, 1750<br />
              6º Andar Vila Olímpia<br />
              <a href="tel:+552122636044" className="phone">tel.: +55 (21) 2263.6044</a>
            </address>
          </div>
          <div className="widget-contact">
            <a className="contact-button" href="mailto:vinicius_neo@hotmail.com">
              <SvgIcon icon="email" />
              <span>ENTRE EM <strong>CONTATO</strong></span>
            </a>
            <a className="contact-button" href="#consultor-online">
              <SvgIcon icon="talk-with-us" />
              <span>FALE COM O NOSSO <strong>CONSULTOR ONLINE</strong></span>
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
