import React, { Component } from 'react';
import Header from '../header';
import Banner from '../banner';
import Market from '../market';
import Footer from '../footer';

class Index extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Banner />
        <Market />
        <Footer />
      </div>
    );
  }
}

export default Index;
