import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Shelf from './components/Shelf/Shelf';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Banner />
          <Shelf />
        </main>
      </div>
    );
  }
}

export default App;
