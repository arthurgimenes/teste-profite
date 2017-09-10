import React from 'react';
import './Footer.scss';

const Footer = () => {
  const pathImages = 'dist/src/images/footer/';
  const SP = `${pathImages}icone-sp.png`;
  const RJ = `${pathImages}icone-rj.png`;
  const contato = `${pathImages}icone-contato.png`;
  const consultor = `${pathImages}icone-consultor.png`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <p className="footer__address" style={{backgroundImage: `url(${RJ})`}}>
            Rua do Acre, 77 - sala 1108
            <br/>
            Centro Rio de Janeiro
            <strong>tel.: +55 (21) 2263.6040</strong>
          </p>
          <p className="footer__address" style={{backgroundImage: `url(${SP})`}}>
            Rua do Acre, 77 - sala 1108
            <br/>
            Centro Rio de Janeiro
            <strong>tel.: +55 (21) 2263.6040</strong>
          </p>
          <div className="footer__contact">
            <a href="/" style={{backgroundImage: `url(${contato})`}}>
              Entre em <strong>Contato</strong>
            </a>
            <a href="/" style={{backgroundImage: `url(${consultor})`}}>
              Fale com o nosso
              <br/>
              <strong>consultor online</strong>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
