import React from 'react'

export default class Address extends React.Component {

  render () {
    const {
      flag,
      address,
      phone
    } = this.props;

    const phoneWithoutmask = phone.replace(/[^\d]+/g, '');

    return (
      <div className="address">
        <img
          className="address-flag"
          src={flag} />
        <address className="address-content">
          <p className="address-content-detail">
            {address}
          </p>
          <a
            href={`tel:+${phoneWithoutmask}`}
            className="address-content-phone"
          >
            {phone}
          </a>
        </address>
      </div>
    )
  }
}
