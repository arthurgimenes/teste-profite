import React from 'react';
import * as firebase from 'firebase';
import './App.scss';
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
import Carrousel from './components/Carrousel.js';
import Footer from './components/Footer.js';

const App = (props) => {
  const data = props.products;

  return (
    <div className="page-wrap">
      <Navigation />
      <Header />
      <Carrousel products={data} />
      <Footer />
    </div>
  )
}

export default App;
