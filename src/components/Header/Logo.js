import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <h3 className="logo__heading">
          <a className="logo__link" href="#">
            <img className="logo__img"
              src={require("../../assets/img/header/logo.svg")}
              alt="Profite"
            />
          </a>
        </h3>
      </div>
    );
  }
}

export default Logo;