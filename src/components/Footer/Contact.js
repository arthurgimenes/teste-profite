import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <div className="contact">

        <div className="contact__wrapper">
          <button className="button contact__button">
            <img className="contact__img"
              src={require("../../assets/img/footer/contact-1.svg")}
              alt="Entre em contato"
            />
            <span className="button__span contact__span">Entre em contato</span>
          </button>
        </div>

        <div className="contact__wrapper">
          <button className="button contact__button">
            <img className="contact__img"
              src={require("../../assets/img/footer/contact-2.svg")}
              alt="Fale com o nosso consultor online"
            />
            <span className="button__span contact__span">Fale com o nosso consultor online</span>
          </button>
        </div>

      </div>
    );
  }
}

export default Contact;