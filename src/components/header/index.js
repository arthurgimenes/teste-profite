import React, { Component } from 'react';
import brand1 from '../../../public/images/icons/bandeira1.png';

class Index extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="logo-login">
            <div className="logo"></div>
            <div className="welcome-login">
              <p className="welcome">Ola, Visitante</p>
              <p className="login">Cadastre-se - Login</p>
            </div>
          </div>
          <div className="search">
            <div className="ico">
              <span className="ico-search"></span>
            </div>
            <input type="text" placeholder="Buscar por..." />
          </div>
          <div className="brands-phone">
            <div className="brands">
              <span className="ico ico-br"></span>
              <span className="ico ico-arg"></span>
              <span className="ico ico-pr"></span>
            </div>
            <div className="phone">
              <span className="ico ico-skype"></span>
              <p>11 33375618</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Index;
