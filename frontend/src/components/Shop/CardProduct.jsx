import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import addCartIco from '../../assets/img/icon_add_cart.svg';

const Grow = keyframes`
from{
        transform: scale(0.9,0.9);
    opacity:0.3;
}to{
        transform: scale(1,1);
    opacity:1;
}
`;

const SCardProduct = styled.div`
animation: ${Grow} 500ms;
animation-delay: ${props => ((Math.random() * 5) * 50)}ms;
animation-fill-mode:backwards;
position:relative;
width: 20%;
min-width:200px;
overflow:hidden;
padding: 1.7%;
margin:1.5% 2% 2.5% 2%;
align-self: baseline;
text-align:center;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
transition: all 0.3s ease 0s;
&&:hover{
    background: #F2F2F2; 
    cursor:pointer;
    box-shadow: 4px 5px 3px #777575d0;
}
@media(max-width:426px){
    min-width:170px;
}
@media(max-width:326px){
    min-width:130px;
}
`;

const Title = styled.h4`
font-family: 'Ubuntu',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 2rem;
line-height: 2.2rem;
color: #7A7A7A;
`;

const StarsRank = styled.div`
unicode-bidi: bidi-override;
direction: rtl;
justify-content: center;
display:flex;
flex-direction:row;
&& > span:hover:before, span:hover ~ span:before {
   content: "★";
   position: absolute;
   left: 0; 
   color: gold;
}
`;

const Star = styled.span`
color:#FF9F1C;
font-size:2rem;
display: inline-block;
position: relative;

&&::after{
    content: "${({ cheked }) => cheked ? '★' : ''}";
    position: absolute;
    left: 0;
    color: gold;
}
`;

const LastPrice = styled.p`
font-family: Ubuntu;
font-style: normal;
font-weight: 400;
font-size: 1.5rem;
line-height: 1.8rem;
text-decoration-line: line-through;
color: #7A7A7A;
`;
const Installments = styled.p`
font-family: Ubuntu;
font-style: normal;
font-weight: normal;
font-size: 1.1rem;
line-height: 1.3rem;
text-align: center;

color: #7A7A7A;
`;

const Price = styled.p`
font-family: Ubuntu;
font-style: normal;
font-weight: 500;
font-size: 2rem;
line-height: 2.3rem;
color: #2EC4B6;
`;

const SImg = styled.img`
width: 100%;
height:20rem;
margin-bottom:0.5rem;
object-fit: cover;
`;


const SIco = styled.img`
width: 19.31px;
height: 20px;
margin-right:3px;
`;

const SButton = styled.button`
width: 130px;
height: 32.42px;
font-family: Ubuntu;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
justify-content:center;
align-items:center;
margin:15px 0 0 0;
background: #2EC4B6;
border-radius: 5px;
border:0;
display:flex;
opacity:${({ isVisible }) => isVisible ? "1" : "0"};
transition: all 0.5s ease 0s;
&&:hover{
    background:#2beddb;
    cursor:pointer;
}
@media(max-width:1000px){
    opacity:1;
}
`;

const EtiquetaOff = styled.div`
position: absolute;
top: 0;
right:0;
width: 75px;
height: 75px;
text-align:right;
padding:15px;
font-family: Ubuntu;
font-style: normal;
font-weight: 500;
font-size: 1.2rem;
color: #FFFFFF;
background: linear-gradient(to top right, #ffffff00 0%, #ffffff00 50%, #FF9F1C 50%, #FF9F1C 100%);
display:${({ isVisible }) => isVisible ? "block" : "none"};
`;


function CardProduct({ product }) {
    const [rank, setRank] = useState([]);
    const [visibleBtn, setVisibleBtn] = useState(false);
    const installments = 3;

    useEffect(() => {
        let rank = [];
        for (let ind = 5; ind > 0; ind--) {
            ind <= product.rank ? rank.push(true) : rank.push(false)
        }
        setRank(rank);
    }, [product.rank]);



    console.log(">>>", String(Number(product.offerPrice) / installments))
    return (

        <SCardProduct
            onMouseOver={() => setVisibleBtn(true)}
            onMouseOut={() => setVisibleBtn(false)}>

            <SImg src={product.imgUrl} alt={product.name} />

            <Title>{product.name}</Title>

            <StarsRank>
                {
                    rank.map((star, ind) => <Star key={ind} cheked={star}>☆</Star>)
                }
            </StarsRank>

            <LastPrice>{product.offerPrice ? "R$ " + String(product.price).replace('.', ',') : null}</LastPrice>

            <Price>
                {product.offerPrice
                    ? "por R$ " + String(product.offerPrice).replace('.', ',')
                    : "R$ " + String(product.price).replace('.', ',')}
            </Price>

            <Installments>
                {product.offerPrice
                    ? "ou em 3x de R$ " + String(Number(product.offerPrice / installments).toFixed(2)).replace('.', ',')
                    : "ou em 3x de R$ " + String(Number(product.price / installments).toFixed(2)).replace('.', ',')}
            </Installments>

            <SButton isVisible={visibleBtn}><SIco src={addCartIco} alt="botao adicionar carrinho ico" />COMPRAR</SButton>

            <EtiquetaOff isVisible={product.isOffer}>Off</EtiquetaOff>

        </SCardProduct>


    );
}

export default CardProduct;