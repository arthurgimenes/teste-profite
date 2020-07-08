import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SCardProduct = styled.div`
width: 220px;
padding: 17px;
margin:15px;
align-self: baseline;
text-align:center;
&&:hover{
  background: #F2F2F2; 
  cursor:pointer;
}
&&:hover::after {
   content: "teste";
    padding:5px 35px 5px 35px;
    margin:25px 0 25px 0;
    background: #2EC4B6;
    border-radius: 5px;
    &&:hover{
        background: #231232;
    }
}
`;


const Title = styled.h4`
font-family: 'Ubuntu',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 1.4rem;
line-height: 1.7rem;
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
&&::before{
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
object-fit: cover;
`;



function CardProduct({ product }) {
    const [rank, setRank] = useState([]);

    useEffect(() => {
        let rank = [];
        for (let ind = 5; ind >= 0; ind--) {
            console.log(ind, 5)
            ind < product.rank ? rank.push(true) : rank.push(false)
        }
        setRank(rank);
        console.log('eae stars ?', rank)
    }, []);


    return (
        <SCardProduct>
            <SImg src={product.imgUrl} alt={product.name} />
            <Title>{product.name}</Title>
            <StarsRank>
                {
                    rank.map((star, ind) => <Star key={ind} cheked={star}>☆</Star>)
                }
            </StarsRank>
            <LastPrice>{product.offerPrice ? "R$ " + String(product.price).replace('.', ',') : null}</LastPrice>
            <Price>{product.offerPrice ? "por R$ " + String(product.offerPrice).replace('.', ',') :
                "R$ " + String(product.price).replace('.', ',')}</Price>
        </SCardProduct>
    );
}

export default CardProduct;