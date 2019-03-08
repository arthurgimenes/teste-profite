import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <Header link='/' alt='PROFIT STORE'/> 
            <Banner />
        </div>
      </div>
    );
  }
}

export default App;
