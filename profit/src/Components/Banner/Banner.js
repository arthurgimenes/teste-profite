import React from 'react';
import Slider from "react-slick";
import banner1 from './banner.png'
import './banner.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Banner = (props) => {
    const banners = [
        { 'title': 'Nossa especialidade em experiência de compra 0.', 'link': '/' , 'img': banner1 },
        { 'title': 'Nossa especialidade em experiência de compra 1.', 'link': '/' , 'img': banner1 },
        { 'title': 'Nossa especialidade em experiência de compra 2.', 'link': '/' , 'img': banner1 }
    ]
    const settings = {
        dots: true,
        infinite: true,
        arrows : true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
      
      };
        return (
        
        <section className="banner">
            <Slider {...settings}>
            {banners.map((itens, key) => {
            return (
                <div key={key} className="banner-itens-item" >
                    <a href={itens.link}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <div className="banner-itens-item-banner-content">
                                        <div className="banner-itens-item-banner-content-text">
                                            <h2>{itens.title}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="banner-itens-item-overlay" style={{backgroundImage: `url(${itens.img})` }} >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            )
            })}
            </Slider>
        </section>
    )

}

export default Banner;