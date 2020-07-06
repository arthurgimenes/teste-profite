import React from 'react';
import styled from 'styled-components';
import BandeiraBrasilIco from '../../assets/img/band/band_brasil.svg'
import BandeiraEspanhaIco from '../../assets/img/band/band_espanha.svg'
import BandeiraUkIco from '../../assets/img/band/band_uk.svg'


const SNavIdiomas = styled.div`
display:flex;
`;

const Image = styled.img`
padding-right:15px;
`;

const NavIdiomas = () => {
    return (
        <SNavIdiomas>
            <Image src={BandeiraBrasilIco} alt="Pt-Br" />
            <Image src={BandeiraEspanhaIco} alt="Pt-Br" />
            <Image src={BandeiraUkIco} alt="Pt-Br" />
        </SNavIdiomas>
    );
}

export default NavIdiomas;