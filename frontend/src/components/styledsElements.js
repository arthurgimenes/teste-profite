import styled from 'styled-components';


export const SHeader = styled.header`
background: #fff;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items:center;
width:100%;
height:80px;
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
`;