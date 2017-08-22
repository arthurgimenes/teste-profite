import React from 'react'
import Slider from 'react-slick'
import ResponsiveImage from './ResponsiveImage'

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <img
      src="/static/image/banner/seta_direita.png"
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const {className, style, onClick} = props
    return (
      <img
        src="/static/image/banner/seta_esquerda.png"
        className={className}
        style={{...style, display: 'block'}}
        onClick={onClick}
      />
  );
}

export default class Banner extends React.Component {

  render () {
    const slides = [
      {
        "image_mobile": "/static/image/banner/banner1_mobile.jpg",
        "image": "/static/image/banner/banner1.jpg"
      },
      {
        "image_mobile": "/static/image/banner/banner2_mobile.jpg",
        "image": "/static/image/banner/banner2.jpg"
      },
      {
        "image_mobile": "/static/image/banner/banner3_mobile.jpg",
        "image": "/static/image/banner/banner3.jpg"
      },
      {
        "image_mobile": "/static/image/banner/banner4_mobile.jpg",
        "image": "/static/image/banner/banner4.jpg"
      },
      {
        "image_mobile": "/static/image/banner/banner5_mobile.jpg",
        "image": "/static/image/banner/banner5.jpg"
      }
    ]

    const  settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    }

    return (
      <section className="main_banner">
        <Slider {...settings}>
          {
            slides.map( (slide, index) => 
                <ResponsiveImage
                  dataIndex={index}
                  key={`slide${index}`}
                  image_mobile={slide.image_mobile}
                  image={slide.image}
                />
            )
          }
        </Slider>
      </section>
    )
  }
}
