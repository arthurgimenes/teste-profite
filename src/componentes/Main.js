import React from 'react';
import BannersJson from './Banners_json';
import Slider from "react-slick";
import { bool } from 'prop-types';
import P from './Products'

class Principal extends React.Component {
    constructor() {
        super()
        this.state = {
           
        }
    }

    render() {
        const banners = BannersJson.map((banner, index) => {
            return (
                <div key={index}>
                    <img src={banner.img}/>
                </div>
            )
        })

        const product = P.map( (produto, index) => {
            console.log(index);
            return (
                <div>
                    <div key={produto.id} className="product">
                        <div className="image-product"><img src={produto.ima} /></div>
                        {produto.id == 'product-2' ?
                         <span className="img-off">
                            <svg width="82" height="73" viewBox="0 0 82 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M82 72.0408L0.639969 1.52588e-05L82 1.52588e-05L82 72.0408Z" fill="#FF9F1C"/>
                                <path d="M44.175 22.2491C44.175 22.9059 44.2556 23.5051 44.4169 24.0467C44.5783 24.5768 44.8087 25.032 45.1083 25.4122C45.4195 25.781 45.794 26.0691 46.2319 26.2765C46.6697 26.4839 47.1652 26.5876 47.7184 26.5876C48.2599 26.5876 48.7497 26.4839 49.1876 26.2765C49.6255 26.0691 49.9942 25.781 50.2938 25.4122C50.6049 25.032 50.8412 24.5768 51.0025 24.0467C51.1638 23.5051 51.2445 22.9059 51.2445 22.2491C51.2445 21.5923 51.1638 20.9988 51.0025 20.4687C50.8412 19.9272 50.6049 19.472 50.2938 19.1032C49.9942 18.723 49.6255 18.4291 49.1876 18.2217C48.7497 18.0143 48.2599 17.9106 47.7184 17.9106C47.1652 17.9106 46.6697 18.0143 46.2319 18.2217C45.794 18.4291 45.4195 18.723 45.1083 19.1032C44.8087 19.4835 44.5783 19.9387 44.4169 20.4687C44.2556 20.9988 44.175 21.5923 44.175 22.2491ZM53.5261 22.2491C53.5261 23.2747 53.3705 24.1792 53.0594 24.9628C52.7598 25.7464 52.3449 26.4032 51.8149 26.9333C51.2963 27.4518 50.6856 27.8436 49.9827 28.1087C49.2798 28.3737 48.5307 28.5062 47.7356 28.5062C46.9405 28.5062 46.1858 28.3737 45.4713 28.1087C44.7684 27.8436 44.1519 27.4518 43.6218 26.9333C43.1033 26.4032 42.6885 25.7464 42.3773 24.9628C42.0662 24.1792 41.9106 23.2747 41.9106 22.2491C41.9106 21.2235 42.0662 20.3247 42.3773 19.5526C42.6885 18.7691 43.109 18.1122 43.6391 17.5822C44.1807 17.0521 44.803 16.6545 45.5059 16.3895C46.2088 16.1245 46.9521 15.992 47.7356 15.992C48.5192 15.992 49.2625 16.1245 49.9654 16.3895C50.6683 16.6545 51.279 17.0521 51.7976 17.5822C52.3277 18.1122 52.7483 18.7691 53.0594 19.5526C53.3705 20.3247 53.5261 21.2235 53.5261 22.2491ZM55.9153 28.2469V16.2685H63.4861V18.118H58.0932V21.1774H62.8811V23.0269H58.0932V28.2469H55.9153ZM65.4355 28.2469V16.2685H73.0063V18.118H67.6134V21.1774H72.4013V23.0269H67.6134V28.2469H65.4355Z" fill="white"/>
                            </svg>
                        </span>: ''}

                        <div className="price-name">
                          <p>{produto.text}</p>
                        </div>
                        <div className="rating"><img src={produto.rating} /></div>
                        <div className="prices">
                            <p className="price-off">{produto.price1}</p>
                            <p className="price-promo">{produto.price2}</p>
                            <p>{produto.price3}</p>
                        </div>
                        <button className="buy">
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.05135 7.23858H10.7656V4.66569H13.3371V2.95043H10.7656V0.377548H9.05135V2.95043H6.47992V4.66569H9.05135V7.23858ZM5.62295 14.9572C4.68009 14.9572 3.91724 15.7291 3.91724 16.6725C3.91724 17.6159 4.68009 18.3878 5.62295 18.3878C6.56581 18.3878 7.33724 17.6159 7.33724 16.6725C7.33724 15.7291 6.56581 14.9572 5.62295 14.9572ZM14.1942 14.9572C13.2514 14.9572 12.4885 15.7291 12.4885 16.6725C12.4885 17.6159 13.2514 18.3878 14.1942 18.3878C15.1371 18.3878 15.9085 17.6159 15.9085 16.6725C15.9085 15.7291 15.1371 14.9572 14.1942 14.9572ZM5.76855 12.1699L5.79427 12.067L6.56569 10.6691H12.9514C13.5943 10.6691 14.16 10.3175 14.4514 9.78573L17.76 3.77376L16.2685 2.95043H16.26L15.3171 4.66569L12.9514 8.95383H6.93427L6.82284 8.72227L4.90284 4.66569L4.08855 2.95043L3.28284 1.23518H0.47998V2.95043H2.19427L5.27998 9.45984L4.12284 11.561C3.98569 11.8012 3.90855 12.0842 3.90855 12.3843C3.90855 13.3277 4.67998 14.0996 5.62284 14.0996H15.9085V12.3843H5.98284C5.87141 12.3843 5.76855 12.29 5.76855 12.1699Z" fill="white"/>
                            </svg>
                            Comprar
                        </button>
                    </div>
                </div>
            )
        } )
        const settings = {
            dots: true,
            infinite: true,
            autoplay: bool,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          }

          const settings_P = {
            dots: true,
            infinite: true,
            autoplay: bool,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                }
              ]
          }
        return (
            <div>
                <div className="principal">
                    <div className="carossel">
                        <Slider {...settings} >
                            {banners}
                        </Slider>
                    </div>
                </div>
                <div className="list-products container">
                    <h1 className="title">Produtos</h1>
                    <Slider {...settings_P} >
                        {product}
                    </Slider>
                </div>
            </div>
        )
    }

    
}

export default Principal