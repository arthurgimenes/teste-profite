import React from 'react';
import styled from 'styled-components';
import NavConta from './NavConta';
import NavIdiomas from './NavIdiomas';


const SMenu = styled.div`
display:flex;
justify-content: center;
align-items:center;
width:300px;
background:#782d54;
`;

const SDivisor = styled.div`
    height:30px;
    border-left:solid 1px #000;
    margin:0 15px 0 15px;
`;

const Menu = () => {
    return (
        <SMenu>
            <NavConta />
            <SDivisor />
            <NavIdiomas />
        </SMenu>
    );
}

export default Menu;