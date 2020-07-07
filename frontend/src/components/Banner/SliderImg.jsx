import React from 'react';
import styled from 'styled-components';


const SSliderImg = styled.div`
width:100%;
height:100%;
position:relative;

`;

const SliderIMG = styled.img`
width:100%;;
position:absolute;
height:100%;
object-fit:cover;
transition: all 1250ms linear 0s;
opacity:${({ active }) => {
        console.log(active)
        return active
    }} ;
`;


const SliderImg = ({ imgs, currentImg }) => {



    return (
        <SSliderImg>
            {
                imgs.map((item, index) => index === currentImg ?
                    <SliderIMG active={1} key={item.nome} name={item.nome} src={item.url} /> :
                    <SliderIMG active={0} key={item.nome} name={item.nome} src={item.url} />
                )
            }

        </SSliderImg>
    );
}

export default SliderImg;