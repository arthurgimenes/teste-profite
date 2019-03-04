import React, { Component } from 'react';
import Banner from '../banner/banner.js';
import Products from '../products/products.js';

class Home extends Component {

  render() {
    return ( 
    <div className="home">
      <Banner/>
      <Products />
    </div>
    );
  }
}

export default Home;
