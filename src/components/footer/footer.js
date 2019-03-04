import React, { Component } from 'react';
import './footer.scss';
import MailIcon from '../../images/mail.png';
import PhoneIcon from '../../images/fone.png';
import profitCreated from '../../images/profit-created.jpg';
import vTexCreated from '../../images/vtex-created.jpg';

let adressesInfo = [
  {adressId: 1, city: 'São Paulo', street: 'Rua do Rócio, 423/1801', district: 'Vila Olimpia - SP', postalCode: '04552-000', phone: '+55 11 3333 3333'},
  {adressId: 2, city: 'Rio de Janeiro', street: 'Vol. da Pátria, 301/702', district: 'Botafogo - RJ', postalCode: '22270-000', phone: '+55 21 3333 3333'}
];

class Footer extends Component {

  renderAdresses = () => {
    let adresses = []

    for (let adress = 0; adress < adressesInfo.length; adress++) {
      adresses.push(
        <div className="adress" key={adressesInfo[adress].adressId}>
          <div className="adress-city">{adressesInfo[adress].city}</div>
          <div className="adress-street adress-info">{adressesInfo[adress].street}</div>
          <div className="adress-district adress-info">{adressesInfo[adress].district}</div>
          <div className="adress-postal adress-info">{adressesInfo[adress].postalCode}</div>
          <div className="adress-phone adress-info">{adressesInfo[adress].phone}</div>
        </div>
      )
    }
    return adresses;
  }

  render() {
    return ( 
    <div className="footer">
      <div className="adresses">
        <div className="adresses-area-title">Localização</div>
        <div className="adresses-area-sub"></div>
        <div className="adresses-found">
          {this.renderAdresses()}
        </div>
      </div>
      <div className="contact-buttons">
        <div className="contact-button">
          <div className="contact-button-icon" style={{backgroundImage: `url(${MailIcon})`}}></div>
          <div className="contact-button-text">Entre em contato</div>
        </div>
        <div className="contact-button">
          <div className="contact-button-icon" style={{backgroundImage: `url(${PhoneIcon})`}}></div>
          <div className="contact-button-text phone">Fale com o nosso<br /> consultor online</div>
        </div>
      </div>
      <div className="createdby">
        <div className="createdby-img" style={{backgroundImage: `url(${profitCreated})`}}></div>
        <div className="createdby-img vtex" style={{backgroundImage: `url(${vTexCreated})`}}></div>
      </div>
    </div>
    );
  }
}

export default Footer;
