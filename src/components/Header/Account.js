import React, { Component } from 'react';

class Account extends Component {
  render() {
    return (
      <div className="account">
        <button className="account__button">
          <img className="account__img"
            src={require("../../assets/img/header/account.svg")}
            alt="Minha Conta"
          />
          <span className="account__span">Minha Conta</span>
        </button>
      </div>
    );
  }
}

export default Account;