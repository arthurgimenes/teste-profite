import React from 'react';
import styled from 'styled-components';
import SliderImg from './SliderImg';
import SliderBody from './SliderBody';


const SBanner = styled.section`
height:430px;
background:red;
width:100%;
position:relative;
`;



const Banner = () => {
    return (
        <SBanner>

            <SliderImg />
            <SliderBody />

        </SBanner>
    );
}

export default Banner;