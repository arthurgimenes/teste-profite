import React, { Component } from 'react';
import Address from './Address';
import Contact from './Contact';
import Credits from './Credits';

class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <h2 className="footer__heading">Localização</h2>

          <div className="row footer__row">
            <Address />
            <Contact />
            <Credits />
          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;