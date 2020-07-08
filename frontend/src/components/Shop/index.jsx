import React from 'react';
import styled from 'styled-components';
import Prateleira from './Prateleira';


const SShop = styled.div`
height:auto;
width:100%;

`;

const Shop = () => {
    return (
        <SShop>
            <Prateleira />
        </SShop>
    );
}

export default Shop;