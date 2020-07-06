import React from 'react';
import styled from 'styled-components';
import MinhaConta from './MinhaConta';
import Carrinho from './Carrinho';


const SNavConta = styled.div`
display:flex;
`;

const NavegationConta = () => {
    return (
        <SNavConta>
            <MinhaConta />
            <Carrinho />
        </SNavConta>
    );
}

export default NavegationConta;