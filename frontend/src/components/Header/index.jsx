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
max-width:1200px;
width:95%;
height:80px;
@media(max-width:426px){
    display:none;
}
`;
const SHeaderMobile = styled.header`
position:relative;
display:flex;
flex-direction:column;
justify-content: space-between;
align-items:center;
max-width:1200px;
width:95%;
height:auto;
display:none;
margin:10px 0 10px 0;
@media(max-width:426px){
    display:flex;
}
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
            <SHeaderMobile>
                <Menu />
                <Search />
            </SHeaderMobile>
        </Container>

    )
}

export default Header;