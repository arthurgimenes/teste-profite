import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import NavigationConta from './NavigationConta';
import NavigationIdiomas from './NavigationIdiomas';
import logo from './../../assets/img/logo.svg';
import BandeiraBrasilIco from '../../assets/img/band/band_brasil.svg'
import BandeiraEspanhaIco from '../../assets/img/band/band_espanha.svg'
import BandeiraUkIco from '../../assets/img/band/band_uk.svg'


const SNavIdiomas = styled.div`

`;

const Image = styled.img`
padding-right:15px;
`;

const SMenu = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
width:auto;
@media(max-width:426px){
    width:100%;
}
`;

const SDivisor = styled.div`
height:30px;
border-left:solid 1px #000;
margin:0 15px 0 15px;
@media(max-width:426px){
    display:none;
}
`;

const Hamburguer = styled.div`
display: none;
&:hover{
    cursor: pointer;
}
@media(max-width: 426px) {
    display: block;
    width: 25px;
    height: 25px;
}
`;

const SDash1 = styled.div`
background:black;
height: 3px;
width: 100%;
margin: 3px auto;
border-radius:25%;
${props => {
        if (props.xToggle) return { "transform": "rotate(-45deg) translate(0px,4px)" };
        return { "transform": "rotate(0)" };
    }};
`;
const SDash2 = styled.div`
    background:black;
    height: 3px;
    width: 100%;
    margin: 3px auto;
    display:${props => props.xToggle};
    border-radius:25%;
`;
const SDash3 = styled.div`
background:black;
height: 3px;
width: 100%;
margin: 3px auto;
${props => {
        if (props.xToggle) return { "transform": "rotate(45deg) translate(0px,-4px)" };
        return { "transform": "rotate(0)" };
    }};
    border-radius:25%;
`;

const SImg = styled.img`
height:30px;
padding-left:15px;
display:none;
@media(max-width:426px){
   display:block;
}
`;

const Grow = keyframes`
from{
    height: 0vh;
    opacity:0.3;
}to{
    height: 15vh;
    opacity:1;
}
`;
const SNav = styled.nav`
animation: ${Grow} 500ms;
animation-fill-mode:forwards;
display:${({ booToggle }) => booToggle};
position:fixed;
background:white;
width:100vw;
height: 15vh;
left: 0;
z-index: 1;
top: 45px;
transition: all 0.3s ease 0s;
border-bottom: 1rem solid #2EC4B6;
flex-direction:column;
justify-content: center;
align-items: center;
`;

const Text = styled.div`
font-style: normal;
font-weight: normal;
font-size: 3rem;
color: #7A7A7A;
margin-bottom:3rem;
font-family:"Ubuntu";
white-space: nowrap;
`;

const Menu = () => {
    const [booToggle, setBooToggle] = useState(false);
    function handToggle() {

        return setBooToggle(!booToggle);
    }
    return (
        <SMenu>

            <Hamburguer onClick={handToggle}>
                <SDash1 xToggle={booToggle ? true : false} />
                <SDash2 xToggle={booToggle ? "none" : "block"} />
                <SDash3 xToggle={booToggle ? true : false} />
            </Hamburguer>
            <SNav booToggle={booToggle ? "flex" : "none"}>


                <Text>Minha Conta</Text>
                <SNavIdiomas>
                    <Image src={BandeiraBrasilIco} alt="Pt-Br" />
                    <Image src={BandeiraEspanhaIco} alt="Pt-Br" />
                    <Image src={BandeiraUkIco} alt="Pt-Br" />
                </SNavIdiomas>


            </SNav>
            <SImg src={logo} alt="Logo Profite" />
            <NavigationConta />
            <SDivisor />
            <NavigationIdiomas />
        </SMenu>
    );
}

export default Menu;