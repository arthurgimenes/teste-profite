import React, { Component } from 'react';
import Menu from './Menu';
import Logo from './Logo';
import Account from './Account';
import Search from './Search';
import Cart from './Cart';
import Language from './Language';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row header__row">
            <Menu />
            <Logo />
            <Cart />
            <Search />

            <div className="header__offset">
              <div className="row">
                <button className="header__offset-button" aria-label="Fechar">
                  <img className="header__offset-img"
                    src={require("../../assets/img/header/close.svg")}
                    alt="Fechar"
                  />
                </button>
                <div className="header__offset-content">
                  <div className="row">
                    <Account />
                    <Language />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
    );
  }
}

export default Header;