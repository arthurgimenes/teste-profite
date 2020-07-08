import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SliderImg from './SliderImg';
import SliderBody from './SliderBody';
import Pagination from './Pagination';


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
    },
    {
        nome: 'img4',
        url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf'
    }
]

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const timeSec = 5;
    let time;

    useEffect(() => {
        time = setTimeout(() => {
            if (currentSlide < imgs.length - 1) {
                setSlider(currentSlide + 1);
            } else {
                setSlider(0);
            }
        }, timeSec * 1000);
        console.log('-[mainBanner]-current index img >', currentSlide)
    }, [currentSlide]);

    function setSlider(n) {
        clearTimeout(time);
        setCurrentSlide(n);
    }



    return (
        <SBanner>

            <SliderImg imgs={imgs} currentImg={currentSlide} />
            <SliderBody />
            <Pagination postsPerPage={1} totalPosts={imgs.length} setPage={setSlider} currentPage={currentSlide} />
        </SBanner>
    );
}

export default Banner;