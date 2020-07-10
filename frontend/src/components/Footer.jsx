import React from 'react';
import styled from 'styled-components';
import icoMail from '../assets/img/icon_mail.svg'
import icoPhone from '../assets/img/icon_phone.svg'
import logosFooter from '../assets/img/logos_footer.svg'


const SFooter = styled.footer`
height:auto;
background:#011627;
padding-bottom:2rem;
padding-top:2rem;
width:100%;
border-bottom: 1rem solid #2EC4B6;
display:flex;
flex-direction:column;
align-items:center;

`;

const BoxGeral = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-between;
@media(max-width:426px){
    flex-direction:column;
}
`;
const ContainerGeral = styled.div`
max-width:1200px;
width:95%;
height:100%;
display:flex;
flex-direction:column;
padding: 0 7rem 0 7rem;
`;

const Box = styled.div`
margin:1rem 0 0.5rem 0;
width:${({ wd }) => wd ? wd : "auto"};
margin:${({ mg }) => mg ? mg : "unset"};
display:flex;
justify-content: center;
`;

const Text = styled.p`
font-family: Ubuntu;
font-style: normal;
font-weight: normal;
font-size: 1.3rem;
line-height: 2rem;
color: #FFFFFF;
`;

const Title = styled.h1`
color:#fff;
font-size:2rem;
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
margin:1rem 0 1rem 0;
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
const SLogosFooter = styled.img`
width: 100%;
margin-right:0.5rem;
@media(max-width:426px){
    width: 40%;
    margin-top:0.5rem;
}
`;



const Footer = () => {
    return (
        <SFooter>
            <ContainerGeral>
                <Title>Localização</Title>
                <DashStyle />
                <BoxGeral>
                    <div style={{ "display": "flex" }}>
                        <Box wd="16.4rem" mg="10px 15px 0 0">
                            <Text>
                                <b>São Paulo</b><br />
                        Rua do Rócio, 423/1801
                            Vila Olímpia - SP<br />
                            04552-000<br />
                            +55 11  3333 3333
                            </Text>

                        </Box>
                        <Box wd="16.4rem" mg="10px 0 0 0">
                            <Text>
                                <b>Rio de Janeiro</b><br />
                            Vol. da Pátria, 301/702
                            Botafogo - RJ<br />
                            22270-000<br />
                            +55 21  3333 3333
                        </Text>

                        </Box>
                    </div>
                    <Box mg="10px 0 0 0">
                        <div>
                            <SButton><SIco src={icoMail} alt="ENTRE EM CONTATO" />ENTRE EM CONTATO</SButton>
                            <SButton><SIco src={icoPhone} alt="ENTRE EM CONTATO" />ENTRE EM CONTATO</SButton>
                        </div>
                    </Box>
                    <Box>
                        <SLogosFooter src={logosFooter} alt="Create By profite e produzido por Vtex" />

                    </Box>

                </BoxGeral>
            </ContainerGeral>
        </SFooter >
    );
}

export default Footer;