import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <Header link='/' alt='PROFIT STORE'/> 
        </div>
      </div>
    );
  }
}

export default App;
