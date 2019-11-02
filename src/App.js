import React from 'react';

import './reset.css';
import './global.css';
import Header from './containers/Header';
import Slider from './containers/Slider';
import Products from './containers/Products';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
