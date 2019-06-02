import React, { Component } from 'react';
import Slide from './app_slide';
import Itens from './app_itens';

export default class Appcontent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catalago: [],
      properties: 0,
      property: 0
    }

  }

  componentDidMount() {

    const url = JSON.stringify(require("../data/base.json"));
    const data = JSON.parse(url);
    this.setState({
      catalago: data.products,
      properties: data.count
    });



  }

  nextProperty = () => {
    const newIndex = this.state.property + 1;
    this.setState({
      property: newIndex
    })
  }

  prevProperty = () => {

    const newIndex = this.state.property - 1;
    this.setState({
      property: newIndex
    })
  }


  render() {
    const { properties, property } = this.state;
    return (
      <div className='content'>

        <div className='slideshow'>
          <div className="slide-imp"></div>
          <div className="slide-par"></div>
          <Slide />
        </div>

        <div className='itens'>
          <h2>Produtos</h2>
          <hr />

          <div className='slide-previous'>
            <div className='seta'>
              <button onClick={() => this.prevProperty()} disabled={property === 0}>
                <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.585 19.415L5.18833 11L13.585 2.585L11 0L0 11L11 22L13.585 19.415Z" fill="#011627" />
                </svg>

              </button>
            </div>
          </div>
          <div className='conteiner-prod'>

            <div className='slider-itens'>
              <div className="cards-slider-wrapper" style={{ 'transform': `translateX(-${property * (110 / properties)}%)` }}>
                {
                  this.state.catalago.map(property => <Itens key={property.code} catalago={property} countCar={this.props.countCar} />)
                }
              </div>
            </div>

          </div>
          <div className='slide-next'>
            <div className='seta'>
              <button onClick={() => this.nextProperty()} disabled={property === properties}  >
                <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M-3.91006e-05 19.415L8.39663 11L-3.91006e-05 2.585L2.58496 0L13.585 11L2.58496 22L-3.91006e-05 19.415Z" fill="#011627" />
                </svg>

              </button>
            </div>
          </div>

        </div>
      </div>
    );

  }

}

