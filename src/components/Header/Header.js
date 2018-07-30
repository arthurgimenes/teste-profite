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
    this.state = {
      menuActive: null,
      innerWidth: window.innerWidth,
    }

    this.updateDimensions = this.updateDimensions.bind(this);
    this.handleMenuState = this.handleMenuState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.offsetMenu = this.offsetMenu.bind(this);
  }

  updateDimensions() {
    this.setState({
      innerWidth: window.innerWidth,
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
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

  offsetMenu(menuActive) {
    if (this.state.innerWidth < 800) {
      return (
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
      );
    } else {
      return (
        <React.Fragment>
          <Language />
          <Account />
        </React.Fragment>
      );
    }
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
            {this.offsetMenu(menuActive)}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;