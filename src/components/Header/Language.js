import React, { Component } from 'react';

class Language extends Component {
  render() {
    return (
      <div className="language">
        <a className="language__link" href="#" title="Português">
          <img className="language__img"
            src={require("../../assets/img/header/flag-br.svg")}
            alt="Português"
          />
        </a>
        <a className="language__link" href="#" title="Español">
          <img className="language__img"
            src={require("../../assets/img/header/flag-es.svg")}
            alt="Español"
          />
        </a>
        <a className="language__link" href="#" title="English">
          <img className="language__img"
            src={require("../../assets/img/header/flag-gb.svg")}
            alt="English"
          />
        </a>
      </div>
    );
  }
}

export default Language;