import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import MediaQuery from 'react-responsive';
import axios from 'axios';

class Index extends Component {
  swiper = null;
  state = { banners: null, error: false };

  componentWillMount() {
    axios.get('/banners.json')
      .then(response => {
        this.setState({ banners: response.data.slides });
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

  renderItems() {
    return this.state.banners.map((banner, key) => {
      return (
        <div className="mySlides fade" key={key}>
          <MediaQuery query='(min-width: 750px)'>
            <img src={banner.image} alt={banner.alt} />
          </MediaQuery>
          <MediaQuery query='(max-width: 750px)'>
            <img src={banner.mobile} alt={banner.alt} />
          </MediaQuery>
        </div>
      )
    });
  }

  render() {
    if (!this.state.banners) {
      return null;
    }

    const settings = {
      loop: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      onInit: (swiper) => {
        this.swiper = swiper
      }
    };

    return (
      <div className="banners">
        <div className="container">
          <Swiper {...settings}>
            {this.renderItems()}
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
