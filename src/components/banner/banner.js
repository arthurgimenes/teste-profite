import React, { Component } from 'react';
import './banner.scss';
import ArrowRight from '../../images/right-arrow.png';
import ArrowLeft from '../../images/left-arrow.png';
import BannerImg from '../../images/banner.png';

class Banner extends Component {

  state = {
    banners: [
      {bannerId: 1, img: BannerImg}
    ]
  }

  render() {
    return ( 
    <div className="banner">
      <div className="acutal-banner">
        <div className="banner-img" style={{backgroundImage: `url(${this.state.banners[0].img})`}}></div>
        <div className="banner-title">Nossa especialidade:<br /> experiência de compra.
          <div className="banner-title-sub"></div>
        </div>
      </div>
      <div className="arrows">
        <img className="arrow-left arrow" alt="arrow" src={ArrowLeft}/>
        <img className="arrow-right arrow" alt="arrow" src={ArrowRight}/>
      </div>
      <div className="banner-selector">
        <div className="banner-selector-ball selected"></div>
        <div className="banner-selector-ball"></div>
        <div className="banner-selector-ball"></div>
        <div className="banner-selector-ball"></div>
      </div>
    </div>
    );
  }
}

export default Banner;
