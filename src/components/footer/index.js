import React, { Component } from 'react';
import CityAddress from './city_address';

class Index extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <CityAddress
            ico="ico-rj"
            street="Rua do acre, 77 - sala 1108"
            city="Centro - Rio de Janeiro"
            phone="+55 (21) 2263.6044" />

          <CityAddress
              ico="ico-sp"
              street="Rua Cardoso de melo, 1750"
              city="6 Andar Vila Olimpio"
              phone="+55 (21) 2263.6044" />

          <div className="contacts">
            <div className="contact-us">
              <span className="ico-contato" />
              <div>Entre em <b>contato</b></div>
            </div>
            <div className="contact-online">
              <span className="ico-consultor" />
              <div>Fale com o nosso <br />
              <b>Consultor online</b></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Index;
