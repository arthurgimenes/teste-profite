import React, { Component } from 'react';
import Header from '../header/header.js';
import Home from '../home/home.js';
import Footer from '../footer/footer.js';
import './app.scss';

class App extends Component {

  render() {
    return ( 
    <div className="app-container">
      <Header/>
      <Home />
      <Footer />
    </div>
    );
  }
}

export default App;
