import React from 'react';
import styled from 'styled-components';
import ShopCart from '../../assets/img/shop_cart.svg';

const SCarrinho = styled.div`
width:100%;
display:flex;
justify-content: center;
align-items: center;
`;
const CartValue = styled.div`
border-radius:100%;
background:#2EC4B6;
width:15px;
height:15px;
display:flex;
justify-content: center;
align-items: center;
`;

const Carrinho = () => {
    return (
        <SCarrinho>
            <img src={ShopCart} alt="Account Ico" /> <CartValue>1</CartValue>
        </SCarrinho>
    );
}

export default Carrinho;