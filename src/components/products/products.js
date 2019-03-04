import React, { Component } from 'react';
import './products.scss';
import Product from '../product/product.js';
import TenisImg from '../../images/tenis.png';
import Right from '../../images/right-products.png';
import Left from '../../images/left-products.png';

let produtos = `[{"position": 1, "id": 1, "productName": "Tenis Couro Puma R698 Q4 V2", "stars": 1, "originalPrice": "299,00", "price": "399,00", "off": false, "image": "${TenisImg}"},
{"position": 2,"id": 2, "productName": "Tenis Couro Puma R698 Q4 V2", "stars": 1, "originalPrice": "299,00", "price": "399,00", "off": false, "image": "${TenisImg}"},
{"position": 3,"id": 3, "productName": "Tenis Couro Puma R698 Q4 V2", "stars": 2, "originalPrice": "299,00", "price": "399,00", "off": true, "image": "${TenisImg}"},
{"position": 4,"id": 4, "productName": "Tenis Couro Puma R698 Q4 V2", "stars": 5, "originalPrice": "299,00", "price": "399,00", "off": true, "image": "${TenisImg}"},
{"position": 5,"id": 5, "productName": "Tenis Couro Puma R698 Q4 V2", "stars": 4, "originalPrice": "299,00", "price": "399,00", "off": true, "image": "${TenisImg}"},
{"position": 6,"id": 6, "productName": "Tenis Couro Puma R698 Q4 V2", "stars": 1, "originalPrice": "299,00", "price": "399,00", "off": false, "image": "${TenisImg}"}]`;

let w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
xsize = w.innerWidth || e.clientWidth || g.clientWidth;

class Products extends Component {

  state = {
    produtos: JSON.parse(produtos),   
    maxAcutal: xsize > 1024 ? 4 : 20,
    minActual: 1,
    scrollPosition: 0,
    scrollAreaSize: 0
  }

  rightArrow = () =>{
    if(this.state.maxAcutal < this.state.produtos[this.state.produtos.length - 1].position){
      this.setState({maxAcutal: this.state.maxAcutal + 1, minActual: this.state.minActual + 1});
    }
  }

  leftArrow = () =>{
    if(this.state.minActual > this.state.produtos[0].position){
    this.setState({maxAcutal: this.state.maxAcutal - 1, minActual: this.state.minActual - 1});
    }
  }

  scrollProducts = (e) =>{
    this.setState({scrollPosition: e.currentTarget.scrollLeft});
  }

  setScroll = (e) =>{
    e.currentTarget.parentElement.parentElement.children[4].scrollLeft = parseInt(e.currentTarget.getAttribute('position'));
  }

  componentDidMount() {
    this.setState({scrollAreaSize: (document.getElementsByClassName('product')[0].offsetWidth + 10) * this.state.produtos.length});
  }

  render() {
    return ( 
    <div className="products-area">
      <div className="products-area-title">Produtos</div>
      <div className="products-area-sub"></div>
      <img className="arrow-products left" onClick={this.leftArrow} alt="arrow" src={Left}/>
      <img className="arrow-products right" onClick={this.rightArrow} alt="arrow" src={Right}/>
      <div className="products-list" onScroll={this.scrollProducts}>
        {Object.keys(this.state.produtos).map(produto => {
          if(this.state.produtos[produto].position >= this.state.minActual && this.state.produtos[produto].position <= this.state.maxAcutal){
            return <Product key={this.state.produtos[produto].id} product={this.state.produtos[produto]} />
          }else{
            return "";
          }
        })}  
      </div>
      <div className="products-selector">
        <div position='0' onClick={this.setScroll} className={"products-selector-ball " +  (this.state.scrollPosition >= 0 && this.state.scrollPosition < (this.state.scrollAreaSize*0.2)? "selected" : '')}></div>
        <div position={this.state.scrollAreaSize*0.2} onClick={this.setScroll} className={"products-selector-ball " +  (this.state.scrollPosition > (this.state.scrollAreaSize*0.2) && this.state.scrollPosition < (this.state.scrollAreaSize*0.5)? "selected" : '')}></div>
        <div position={this.state.scrollAreaSize*1} onClick={this.setScroll} className={"products-selector-ball " +  (this.state.scrollPosition > (this.state.scrollAreaSize * 0.5)? "selected" : '')}></div>
     </div>
    </div>
    );
  }
}

export default Products;
