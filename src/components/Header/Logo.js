import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <h3 className="logo__heading">
          <img className="logo__img"
            src={require("../../assets/img/header/logo.svg")}
            alt="Profite"
          />
        </h3>
      </div>
    );
  }
}

export default Logo;