import React from 'react';
import './scss/home.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BannerDesktop from './components/Banners/BannerDesktop';
import BannerMobile from './components/Banners/BannerMobile';
import Stock from './components/Product/Stock';

const Home = () => {
  return (
    <>
    <Header />
    <BannerDesktop />
    <BannerMobile />
    <Stock />
    <Footer />
    </>
  )
}

export default Home;
