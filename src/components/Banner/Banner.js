import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <img className="banner__img"
          src={require("../../assets/img/banner/carousel-1.png")}
          alt="Uma pessoa digita informações de pagamento no seu notebook."
        />
      </div>
    );
  }
}

export default Banner;