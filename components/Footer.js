import React from 'react'
import Address from './Address'

export default class Footer extends React.Component {

  render () {
    const addresses = [
      {
        "flag": "/static/image/footer/ico_rj.png",
        "address": "Rua do Acre, 77- sala 1108, Centro - Rio de Janeiro",
        "phone": "+55 (21) 2263-6044"
      },
      {
        "flag": "/static/image/footer/ico_sp.png",
        "address": "Rua Cardoso de Melo, 1750 - 6o andar, Vila Olímpia - São Paulo",
        "phone": "+55 (21) 2263-6044"
      }
    ]
    return (
      <footer className="footer">
        <div className="footer-addresses">
          {
            addresses.map( (item, index) =>
              <Address
                key={`address${index}`}
                flag={item.flag}
                address={item.address}
                phone={item.phone}
              />
            )
          }
        </div>
        <div className="footer-contact">
          <button className="footer-contact-button">
            <img src="/static/image/footer/ico_contato.png" />
            Entre em <strong>Contato</strong>
          </button>
          <button className="footer-contact-button">
            <img src="/static/image/footer/ico_consultor.png" />
            Fale com o nosso <strong>Consultor Online</strong>
          </button>
        </div>
      </footer>
    )
  }
}
