import React, { Component } from 'react';
import './header.scss';
import Logo from '../../images/logo.jpg';
import SearchIcon from '../../images/search.png';
import UserPic from '../../images/user.jpg';
import CartIcon from '../../images/cart.png';
import Portugues from '../../images/banderira-brasil.png';
import Ingles from '../../images/bandeira-ingles.png';
import Espanhol from '../../images/bandeira-espanhol.png';
import MobileMenu from '../../images/mobile-menu.png';

class Header extends Component {

  render() {
    return ( 
    <div className="header">
      <img className="menu-mobile" alt="menu" src={MobileMenu}/>
      <img className="logo" alt="profit" src={Logo}/>
      <div className="search-header">
        <input className="search-header-input" placeholder="O que está procurando?"/>
        <img className="search-header-icon" alt="search" src={SearchIcon} />
      </div>
      <div className="menu-header">
        <div className="user-area">
          <img className="user-area-pic" alt="user" src={UserPic}/>
          <div className="user-area-title">Minha Conta</div>
        </div>   
        <div className="cart">
          <img className="cart-icon" alt="cart" src={CartIcon}/>
          <div className="cart-number">0</div>
        </div>
        <div className="divider"></div>
        <div className="bandeiras">
          <img className="bandeira" alt="portugues" src={Portugues}/>
          <img className="bandeira" alt="espanhol" src={Espanhol}/>
          <img className="bandeira" alt="ingles" src={Ingles}/>
        </div>
      </div>
    </div>
    );
  }
}

export default Header;
