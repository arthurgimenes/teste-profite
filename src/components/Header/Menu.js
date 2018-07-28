import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <button className="menu__button" aria-label="Menu">
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