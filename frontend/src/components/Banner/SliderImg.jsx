import React from 'react';
import styled from 'styled-components';


const SSliderImg = styled.div`

width:100%;
height:100%;
position:relative;
img{
    width:100%;;
    position:absolute;
    height:100%;
    object-fit:cover;
    
}
`;



const SliderImg = () => {
    return (
        <SSliderImg>
            <img src="https://images.pexels.com/photos/3178767/pexels-photo-3178767.jpeg" />
            <img src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg" />
            <img src="https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg" />
        </SSliderImg>
    );
}

export default SliderImg;