import React from 'react';
import PropTypes from 'prop-types';

const Itens = ({ catalago, countCar }) => {
    const { index, code, name, stars, price, setoff, sale } = catalago;
    return (
        <div id={`card-${index}`} className="card">

            <div className='itens_cols'>
                <img src={require(`../data/img/${code}.png`)} alt='tenis' />
                <p><label className='lbdesc'>{name}</label></p>
                <p><img src={require(`../data/img/${stars}.png`)} className='stars' alt='avaliacao' /></p>
                <p style={{ 'height': '19px' }}><label className='priceIni'>{sale === 1 ? `de ${moeda(price)}` : ''}</label></p>
                <p><label className='priceTot'>{sale === 1 ? 'por ' : ''}{moeda(price - setoff)}</label></p>
                <p><label className='parclb'>ou em 3x de ${moeda((price - setoff) / 3)}</label></p>
                <p><button className='btn' onClick={countCar}>COMPRAR</button></p>
            </div>

        </div>
    )
}

function moeda(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}


Itens.propTypes = {
    countCar: PropTypes.func.isRequired
}


export default Itens;