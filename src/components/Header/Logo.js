import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <h1 className="logo__heading">
          <a className="logo__link" href="/" title="Profite">
            <img className="logo__img"
              src={require("../../assets/img/header/logo.svg")}
              alt="Profite"
            />
          </a>
        </h1>
      </div>
    );
  }
}

export default Logo;