import React from 'react';
import styled from 'styled-components';
import logo from './../../assets/img/logo.svg';
import Search from './Search';
import Menu from './Menu';
import Container from '../Container';

const SHeader = styled.header`
display:flex;
flex-direction:row;
justify-content: space-between;
align-items:center;
width:1200px;
height:80px;
`;

const SImg = styled.img`
    height:30px;
    padding-left:15px;
`;




const Header = () => {
    return (
        <Container>
            <SHeader>
                <SImg src={logo} alt="Logo Profite" />
                <Search />
                <Menu />
            </SHeader>
        </Container>

    )
}

export default Header;