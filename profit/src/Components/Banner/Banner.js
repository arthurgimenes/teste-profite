import React from 'react';
import './banner.scss';
import banner1 from './banner.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Banner = (props) => {
    const banners = [
        { 'title': 'title', 'link': '/' , 'img': banner1 },
        { 'title': 'title2', 'link': '/' , 'img': banner1 },
        { 'title': 'title3', 'link': '/' , 'img': banner1 }
    ]
    const settings = {
        dots: true,
        infinite: false,
        arrows : true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <section className="banner">
        <Slider {...settings}>
        {banners.map((itens, key) => {
                return (
                    <div key={key} className="banner-itens-item" style={{overflow : 'hidden'}}>
                        <a href={itens.link}>
                            <div className="col-6">
                                <h3>{itens.title}</h3>
                            </div>
                            <div className="col-6">
                                <div className="banner-itens-item-overlay"></div>
                                <figure className="banner-itens-item-image">
                                    <img src={itens.img} alt={itens.title} />
                                </figure>
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