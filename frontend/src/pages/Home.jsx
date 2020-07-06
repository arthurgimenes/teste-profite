import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header'
import Banner from '../components/Banner';
import Prateleira from './../components/Prateleira';
import Footer from './../components/Footer';


const SHome = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`;


const Home = () => {
    return (
        <SHome>
            <Header />
            <Banner />
            <Prateleira />
            <Footer />
        </SHome>
    )
}

export default Home;