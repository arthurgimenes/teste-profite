import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import axios from 'axios';
import Lightbox from 'react-images';

class Index extends Component {
  swiper = null;
  state = {
    products: null,
    error: false,
    lightboxIsOpen: false,
    image: ''
  };

  componentWillMount() {
    axios.get('/sapatos.json')
      .then(response => {
        this.setState({ products: response.data.produtos });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  goNext() {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev() {
    if (this.swiper) this.swiper.slidePrev()
  }

  openLightbox(image, event) {
    this.setState({ lightboxIsOpen: true, image: image });
  }

  closeLightbox() {
    this.setState({ lightboxIsOpen: false, image: '' });
  }

  renderProducts() {
    return this.state.products.map((product, key) => {
      return (
        <a className="item" key={key} onClick={this.openLightbox.bind(this, product.imagens.zoom)}>
          <div className="item-img">
            <img src={product.imagens.padrao} alt="" />
          </div>
          <h3>{product.nome}</h3>
          <div className="stars">
            <img src="images/icons/estrelas.png" alt="" />
          </div>
          <div className="price">
            {product.preco_antigo ? <p className="de">De: {product.preco_antigo}</p> : null}
            <p className="por">Por: {product.preco}</p>
            <p className="or">ou <span>até {product.parcela}</span> de <span>{product.preco_parcelado}</span></p>
          </div>
          <div className="buttons">
            <button type="button" className="btn-buy"><span className="ico-market"></span> Comprar</button>
            <button type="button" className="economize">Economize{product.economia}</button>
          </div>
          <Lightbox
            images={[
              { src: this.state.image }
            ]}
            isOpen={this.state.lightboxIsOpen}
            onClose={this.closeLightbox.bind(this)}
          />
        </a>
      )
    })
  }

  render() {
    const { products } = this.state;

    if (!products) {
      return null;
    }

    const settings = {
      slidesPerView: 4,
      spaceBetween: 50,
      paginationClickable: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10
        },
      },
      onInit: (swiper) => {
        this.swiper = swiper
      }
    };

    return (
      <div className="market">
        <div className="container">
          <Swiper {...settings}>
            {this.renderProducts()}
          </Swiper>
          <div className="arrows-control prev" onClick={this.goPrev.bind(this)}>
            <i className="ico arrow-left" />
          </div>
          <div className="arrows-control next" onClick={this.goNext.bind(this)}>
            <i className="ico arrow-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
