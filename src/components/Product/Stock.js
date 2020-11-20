import React from 'react';
import { stockData } from "./../../data";
import rating from '../../images/rating.svg';
import Slider from "react-slick";
import Buttons from '../../components/Common/Buttons';

const Stock = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <>
      <div className="shelf">
      <div className="shelf__container">
      <h2>Produtos</h2>
      <Slider {...settings}>
        {stockData.map((data, index) => {
          return (
            <div key={index} className="shelf__box">
              <div className="shelf__flag">
                <span className="flag">{data.promotion}</span>
              </div>

              <span className="shelf__image">
                <img src={data.image} alt="Imagem do produto"/>
              </span>

              <span className="shelf__rating">
                <img src={rating} alt="Avaliação"/>
              </span>

              <span className="shelf__title">
                {data.title}
              </span>
              <span className="shelf__old-price">
                {data.oldPrice}
              </span>
              <span className="shelf__best-price">
              {data.bestPrice}
              </span>
              <span className="shelf__installment">
                {data.installment}
              </span>
                <Buttons id='shelf__button' value={data.button}></Buttons>
            </div>
          );
        })}
        </Slider>
      </div>
      </div>
    </>
  )
}

export default Stock;