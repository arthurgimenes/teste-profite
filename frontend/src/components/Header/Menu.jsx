import React from 'react';
import styled from 'styled-components';
import NavigationConta from './NavigationConta';
import NavigationIdiomas from './NavigationIdiomas';


const SMenu = styled.div`
display:flex;
justify-content: center;
align-items:center;

`;

const SDivisor = styled.div`
    height:30px;
    border-left:solid 1px #000;
    margin:0 15px 0 15px;
`;

const Menu = () => {
    return (
        <SMenu>
            <NavigationConta />
            <SDivisor />
            <NavigationIdiomas />
        </SMenu>
    );
}

export default Menu;