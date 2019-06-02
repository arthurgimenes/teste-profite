import React from 'react';
import './style/css/App.css';
import Appcontent from './componets/app_content';
import Headers from './componets/app_header';
import Footer from './componets/app_footer';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      carItens: 0
    }

    this.countCar = this.countCar.bind(this);

  }

  countCar() {

    this.setState({
      carItens: (this.state.carItens + 1)
    })

  }

  //function App() {
  render() {

    return (
      <div className="">
        <Headers car={this.state.carItens} />
        <Appcontent countCar={this.countCar} />
        <Footer />
      </div>
    );
  }
}

