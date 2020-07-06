import React from 'react';
import styled from 'styled-components';
import logo from './../../assets/img/logo.svg';
import Search from './Search';
import Menu from './Menu';
import Container from '../Container';

const SHeader = styled.header`
background: #fff;
display:flex;
flex-direction:row;
justify-content: center;
align-items:center;
width:100%;
height:80px;
`;

const SImg = styled.img`
    height:30px;
`;




const Header = () => {
    return (
        <SHeader>
            <Container>
                <SImg src={logo} />
                <Search />
                <Menu />
            </Container>
        </SHeader>

    )
}

export default Header;