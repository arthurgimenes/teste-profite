import React, { Component } from 'react';
import Menu from './Menu';
import Logo from './Logo';
import Cart from './Cart';
import Search from './Search';
import Account from './Account';
import Language from './Language';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { menuActive: null }
    this.handleMenuState = this.handleMenuState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMenuState(menuActive) {
    this.setState({ menuActive: menuActive });
  }

  handleClick() {
    this.setState({ menuActive: false });
  }

  toggleMenuClass(menuActive) {
    let className = "header__offset";

    if (menuActive != null) {
      (menuActive === true)
        ? className += " header__offset--active"
        : className += " header__offset--inactive"
    }

    return className;
  }

  render() {
    const menuActive = this.state.menuActive;

    return (
      <header className="header">
        <div className="container">
          <div className="row header__row">
            <Menu menuActive={this.handleMenuState} />
            <Logo />
            <Cart />
            <Search />

            <div className={this.toggleMenuClass(menuActive)}>
              <div className="row">
                <button className="header__offset-button" aria-label="Fechar"
                  onClick={() => this.handleClick()}
                >
                  <img className="header__offset-img"
                    src={require("../../assets/img/header/close.svg")}
                    alt="Fechar"
                  />
                </button>

                <Language />
                <Account />

              </div>
            </div>

          </div>
        </div>
      </header>
    );
  }
}

export default Header;