import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Banner />
        </main>
      </div>
    );
  }
}

export default App;
