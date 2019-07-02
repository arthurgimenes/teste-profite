import React from 'react';
import './header.scss'
import Logo from '../../assets/imgs/header/logo'
import Lupa from '../../assets/imgs/header/lupa'
import Perfil from '../../assets/imgs/header/perfil'
import Carrinho from '../../assets/imgs/header/carrinho'
import Bandeiras from '../../assets/imgs/header/bandeiras'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
               <Logo />
            </div>
            <div className="search-box">
                <input className="search" type="text" placeholder="O que está procurando?" />
                <div className="lupa">
                    <Lupa  />
                </div>
            </div>
            <div className="minhaConta">
                <div className="perfil">
                    <Perfil />
                    <a href="./" className="texto">Minha Conta</a>
                </div>
            </div>
            <div className="carrinho">
                <Carrinho />
                <button className="button">1</button>
            </div>
            <div className="line">
            </div>
            <div className="bandeiras">
                <Bandeiras />
            </div>
        </div>
        )
}

export default Header;