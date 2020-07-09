import React from 'react';
import styled from 'styled-components';
import icoMail from '../assets/img/icon_mail.svg'
import icoPhone from '../assets/img/icon_phone.svg'


const SFooter = styled.footer`
height:213px;
background:#011627;
width:100%;
border-bottom: 10px solid #2EC4B6;
display:flex;
flex-direction:column;
align-items:center;
`;

const BoxGeral = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-between;
background:red;
`;
const ContainerGeral = styled.div`
width:1200px;
height:100%;
display:flex;
flex-direction:column;
background:red;
padding: 0 7rem 0 7rem;
`;

const Box = styled.div`
background: grey;
margin:10px 0 5px 0;
`;

const Text = styled.h1`
color:#fff;
font-size:2rem;
font-style: normal;
font-weight: 500;
font-size:2.4rem;
line-height: 2.6rem;
margin-bottom:0.5rem;
font-family:"Ubuntu";
align-self:start;
`;

const Title = styled.h1`
color:#fff;
font-size:3rem;
font-style: normal;
font-weight: bold;
font-size:2.4rem;
line-height: 2.6rem;
margin-bottom:0.5rem;
font-family:"Ubuntu";
align-self:start;
`;

const DashStyle = styled.div`
border-bottom: 0.4rem solid #FF9F1C;
width: 6rem;
align-self:start;
`;

const SButton = styled.button`
width: 20rem;
height: 3.3rem;
font-family: Ubuntu;
font-style: normal;
font-weight: 500;
font-size: 1.4rem;
line-height: 1.6rem;
color: #FFFFFF;
justify-content:center;
align-items:center;
margin:1.5rem 0 0 0;
background: #FF9F1C;
border-radius: 0.5rem;
border:0;
display:flex;
transition: all 0.5s ease 0s;
&&:hover{
    background:#FF7111;
    cursor:pointer;
}
`;
const SIco = styled.img`
width: 2rem;
height: 2rem;
margin-right:0.5rem;
`;

const Footer = () => {
    return (
        <SFooter>
            <ContainerGeral>
                <Title>Localização</Title>
                <DashStyle />
                <BoxGeral>
                    <Box>
                        <Text>São Paulo</Text>
                        <p>
                            Rua do Rócio, 423/1801
                            Vila Olímpia - SP
                            04552-000
                            +55 11  3333 3333
                        </p>
                    </Box>
                    <Box>
                        <Text>Rio de Janeiro</Text>
                        <p>
                            Vol. da Pátria, 301/702
                            Botafogo - RJ
                            22270-000
                            +55 21  3333 3333
                        </p>
                    </Box>
                    <Box>
                        <SButton><SIco src={icoMail} alt="ENTRE EM CONTATO" />ENTRE EM CONTATO</SButton>
                        <SButton><SIco src={icoPhone} alt="ENTRE EM CONTATO" />ENTRE EM CONTATO</SButton>
                    </Box>
                    <Box>
                        <Text>Localização</Text>

                    </Box>
                    <Box>
                        <Text>Localização</Text>

                    </Box>
                </BoxGeral>
            </ContainerGeral>
        </SFooter>
    );
}

export default Footer;