import React from 'react'
import Title from '../Title/Title'
import './footer.scss'
import iconContact from './contact.svg'
import iconMail from './mail.svg'
import Button from '../Button/Button'
const Footer = (props) => {

  return(
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Title title="Localização" color='#fff' />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="row">
            <div className="col-md-6">
            <h4>São Paulo</h4>  
            Rua do Rócio, 423/1801
            Vila Olímpia - SP
            04552-000
            +55 11  3333 3333
            </div>
            <div className="col-md-6">
            <h4>Rio de Janeiro</h4>
            Vol. da Pátria, 301/702
            Botafogo - RJ
            22270-000
            +55 21  3333 3333
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6 col-xs-6">
                <Button src={iconMail} title="entre em contato"/>
                <Button src={iconContact} title="FALE COM O NOSSO CONSULTOR ONLINE"/>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer