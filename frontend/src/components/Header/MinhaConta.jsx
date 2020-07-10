import React from 'react';
import styled from 'styled-components';
import AccountIco from '../../assets/img/my_account.svg';


const SMinhaConta = styled.div`
width:100%;
display:flex;
justify-content: center;
align-items: center;
margin-right:10px;
@media(max-width:426px){
    display:none;
}
`;

const Image = styled.img`
width:2.5rem;
padding-right:5px;
`;

const Text = styled.div`
font-style: normal;
font-weight: normal;
font-size: 1.4rem;
line-height: 1.6rem;
color: #7A7A7A;
font-family:"Ubuntu";
white-space: nowrap;

`;

const MinhaConta = () => {
    return (
        <SMinhaConta>
            <Image src={AccountIco} alt="Account Ico" /> <Text>Minha Conta</Text>
        </SMinhaConta>
    );
}

export default MinhaConta;