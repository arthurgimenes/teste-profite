
import React from 'react'
import Slider from "react-slick";
import './product.scss'
import imgProduct from './tenis.png'
import iconButton from './iconChart.svg'
import productData from './shelfData.json'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const settings = {
  dots: true,
  infinite: true,
  arrows : true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay : true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]

};

const Product = () => {

  return(
    <div className="row">
    <Slider {...settings}>
    {productData.map((shelfIten , key ) => {
      return(
      <div className="col-xs-6 col-sm-6 col-md-3" key={key}>
        <div className="productShelf">
          <figure className="productShelf-img">
          <img src={shelfIten.img} onError={(e)=>{e.target.onerror = null; e.target.src=imgProduct} }  alt={shelfIten.title}/>
          </figure>
          <div className="productShelf-content">
            <h3>{shelfIten.title}</h3>
            <div className="productShelf-content-rating">
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" stroke='#FF9F1C' clipRule="evenodd" d="M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z" fill="#FF9F1C"/>
            </svg>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" stroke='#FF9F1C' clipRule="evenodd" d="M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z" fill="#FFF"/>
            </svg>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" stroke='#FF9F1C' clipRule="evenodd" d="M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z" fill="#FFF"/>
            </svg>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" stroke='#FF9F1C' clipRule="evenodd" d="M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z" fill="#FFF"/>
            </svg>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" stroke='#FF9F1C' clipRule="evenodd" d="M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z" fill="#FFF"/>
            </svg>
            </div>
          </div>
          <div className="productShelf-content-price">
            <small className="productShelf-content-price-old">de R$ {shelfIten.oldPrice}</small>
            <p className="productShelf-content-price-current">por R$ {shelfIten.currentPrice}</p>
            <small className="productShelf-content-price-finance">
               ou em 3x de R$ {shelfIten.finance}
            </small>
            <button className="productShelf-content-button">
             <img src={iconButton} alt="comprar"/> COMPRAR
            </button>
          </div>
        </div>
      </div>
      )}
    )}
    </Slider>
    </div>
  )
}

export default Product;