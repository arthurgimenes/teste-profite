import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.menuActive(true);
  }

  render() {
    return (
      <div className="menu">
        <button className="menu__button" aria-label="Menu"
          onClick={() => this.handleClick()}
        >
          <img className="menu__img"
            src={require("../../assets/img/header/menu.svg")}
            alt="Menu"
          />
        </button>
      </div>
    );
  }
}

export default Menu;