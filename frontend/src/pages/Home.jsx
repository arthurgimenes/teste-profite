import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header'
import Banner from '../components/Banner';
import Shop from './../components/Shop';
import Footer from './../components/Footer';
import Container from './../components/Container';


const SHome = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
min-height:100vh;
`;


const Home = () => {
    return (
        <SHome>
            <Container>
                <Header />
                <Banner />
            </Container>
            <Shop />
            <Footer />
        </SHome>
    )
}

export default Home;