import React, { Component } from 'react';

class Language extends Component {
  render() {
    return (
      <div className="language">
        <a className="language__link" href="#">
          <img className="language__img"
            src={require("../../assets/img/header/flag-br.svg")}
            alt="BR"
          />
        </a>
        <a className="language__link" href="#">
          <img className="language__img"
            src={require("../../assets/img/header/flag-es.svg")}
            alt="ES"
          />
        </a>
        <a className="language__link" href="#">
          <img className="language__img"
            src={require("../../assets/img/header/flag-gb.svg")}
            alt="GB"
          />
        </a>
      </div>
    );
  }
}

export default Language;