import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Shelf from './components/Shelf/Shelf';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Banner />
          <Shelf />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
