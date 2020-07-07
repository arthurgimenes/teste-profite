import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SliderImg from './SliderImg';
import SliderBody from './SliderBody';


const SBanner = styled.section`
height:430px;
background:red;
width:100%;
position:relative;
`;


const imgs = [
    {
        nome: 'img1',
        url: 'https://images.pexels.com/photos/3178767/pexels-photo-3178767.jpeg'
    },
    {
        nome: 'img2',
        url: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg'
    },
    {
        nome: 'img3',
        url: 'https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg'
    }
]

const Banner = () => {
    const time = 5000;

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            console.log('length ', imgs.length)
            if (currentSlide < imgs.length - 1) {
                setCurrentSlide(currentSlide + 1);

            } else {
                setCurrentSlide(0);
            }
            console.log('weae')
        }, time)
        console.log('current img ', currentSlide)
    }, [currentSlide])
    return (
        <SBanner>

            <SliderImg imgs={imgs} currentImg={currentSlide} />
            <SliderBody />

        </SBanner>
    );
}

export default Banner;