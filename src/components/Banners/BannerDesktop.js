import React from 'react';
import Slider from "react-slick";
import banner from '../../images/Fullbanner.jpg';

const BannerDesktop = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
    <section>
      <div className="slider slider--desktop">
      <Slider {...settings}>
        <div className="box-banner">
                <img
                    width="1922"
                    height="430"
                    alt="banner 1"
                    src={banner}
                />
        </div>
        <div className="box-banner">
                <img
                    width="1922"
                    height="430"
                    alt="banner 1"
                    src="https://via.placeholder.com/1920x430/269f94?text=Banner"
                />
        </div>
        <div className="box-banner">
                <img
                    width="1920"
                    height="430"
                    alt="banner 2"
                    src="https://via.placeholder.com/1920x430/269f94?text=Banner"
                />
        </div>
        <div className="box-banner">
              <img
                  width="1920"
                  height="430"
                  alt="banner 2"
                  src="https://via.placeholder.com/1920x430/269f94?text=Banner"
              />
      </div>
      </Slider>
      </div>
    </section>
    </>

  )
}

export default BannerDesktop
