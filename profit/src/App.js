import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Shelf from './Components/Shelf/Shelf'
import Footer from './Components/Footer/Footer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <Header link='/' alt='PROFIT STORE'/> 
        </div>
          <Banner />
          <Shelf/>
          <Footer /> 
      </div>
    );
  }
}

export default App;
