import React from 'react';
import styled from 'styled-components';
import Prateleira from './Prateleira';


const SShop = styled.div`
height:auto;
width:1200px;

`;
const Text = styled.h1`
color:#000;
font-size:3rem;
font-style: normal;
font-weight: bold;
font-size:2rem;
line-height: 2.2rem;
margin-bottom:0.5rem;
margin-top:1.5rem;
margin-left:7rem;
font-family:"Ubuntu";
`;

const DashStyle = styled.div`
margin-left:7rem;
border-bottom: 0.4rem solid #FF9F1C;
width: 6rem;

`;

const Shop = () => {
    return (
        <SShop>

            <Text>Produtos</Text>
            <DashStyle />
            <Prateleira />

        </SShop>
    );
}

export default Shop;