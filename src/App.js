import React from 'react';
import './App.scss';
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
import Carrousel from './components/Carrousel.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div className="page-wrap">
      <Navigation />
      <Header />
      <Carrousel />
      <Footer />
    </div>
  )
}

export default App;
