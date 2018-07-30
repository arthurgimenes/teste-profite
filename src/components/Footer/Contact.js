import React, { Component } from 'react';
import EnvelopeIcon from './EnvelopeIcon';
import HeadsetIcon from './HeadsetIcon';

class Contact extends Component {

  render() {
    return (
      <div className="contact">

        <div className="contact__wrapper">
          <button className="button contact__button">
            <div className="contact__icon">
              <EnvelopeIcon />
            </div>
            <span className="button__span contact__span">Entre em contato</span>
          </button>
        </div>

        <div className="contact__wrapper">
          <button className="button contact__button">
            <div className="contact__icon">
              <HeadsetIcon />
            </div>
            <span className="button__span contact__span">Fale com o nosso consultor online</span>
          </button>
        </div>

      </div>
    );
  }
}

export default Contact;