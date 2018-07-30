import React, { Component } from 'react';
import AccountIcon from './AccountIcon';

class Account extends Component {
  render() {
    return (
      <div className="account">
        <button className="account__button">
          <div className="account__icon">
            <AccountIcon />
          </div>
          <span className="account__span">Minha Conta</span>
        </button>
      </div>
    );
  }
}

export default Account;