import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';
import user from '../img/user.png';
import market from '../img/car.png';
import bra from '../img/br.png';
import esp from '../img/es.png';
import eng from '../img/en.png';


const Headers = ({ car }) => (
    <header>
        <div className='header-content'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <input type="checkbox" id="control-nav" hidden />
            <label htmlFor="control-nav" className="control-nav"></label>
            <label htmlFor="control-nav" className="control-nav-close"></label>
            <nav className='nav-itens'>
                <ul>
                    <li>
                        <label>Logar</label>
                    </li>
                    <li>
                        <label>Carrinho</label>
                    </li>
                    <li>
                        <label>Português</label>
                    </li>
                    <li>
                        <label>Espanhol</label>
                    </li>
                    <li>
                        <label>Inglês</label>
                    </li>

                </ul>
            </nav>
            <div className='search'>
                <input type='text' placeholder='O que está procurando?' />
            </div>
            <div className='account'>
                <div className='account-user'>
                    <img src={user} alt='user' />
                </div>
                <div className='account-name'>
                    <label>Minha conta</label>
                </div>
            </div>

            <div className='market'>
                <div className='market-img'><img src={market} alt='carrinho' /></div>
                <div className='market-num'><span className="car-number">{car}</span></div>
            </div>

            <div className='language'>
                <hr />
                <div className='language-band'>
                    <img src={bra} alt='pt-br' />
                    <img src={esp} alt='es' />
                    <img src={eng} alt='en' />
                </div>
            </div>
        </div>
    </header>
);

Headers.propTypes = {
    car: PropTypes.number
}

export default Headers;