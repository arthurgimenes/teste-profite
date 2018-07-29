import React, { Component } from 'react';

class Address extends Component {

  render() {
    return (
      <div className="address">
        <address className="address__address">
          <span className="address__span address__city">São Paulo</span>
          <span className="address__span">Rua do Rócio, 423/1801</span>
          <span className="address__span">Vila Olímpia - SP</span>
          <span className="address__span">04552-000</span>
          <span className="address__span">+55 11  3333 3333</span>
        </address>

        <address className="address__address">
          <span className="address__span address__city">Rio de Janeiro</span>
          <span className="address__span">Vol. da Pátria, 301/702</span>
          <span className="address__span">Botafogo - RJ</span>
          <span className="address__span">22270-000</span>
          <span className="address__span">+55 21  3333 3333</span>
        </address>
      </div>
    );
  }
}

export default Address;