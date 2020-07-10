import React from 'react';
import styled from 'styled-components';


const SSliderBody = styled.div`
width:100%;
height:100%;
top:0;
position:absolute;

`;

const BoxBlender = styled.div`
width:100%;
height:100%;
background:#011627;
position: absolute;
top:0;
background: #2EC4B6;
mix-blend-mode: multiply;
`;

const Box = styled.div`
width:50%;
height:100%;
background:#011627;
position: absolute;
top:0;
display:flex;
flex-direction:column;
justify-content: center;
align-items:flex-end;
padding-right:4rem;
@media(max-width:800px){
    padding-right:unset;
    padding-left:10%;
    background:unset;
    width: 60%;
    align-items:flex-start;
}
`;

const Text = styled.h1`
color:white;
font-style: normal;
font-weight: bold;
font-size: 4.5rem;
line-height: 5.2rem;
margin-bottom:2rem;
font-family:"Ubuntu";
`;

const DashStyle = styled.div`
border-bottom: 1rem solid #FF9F1C;
width: 7rem;
margin-right: 42rem;
@media(max-width:800px){
    margin-right:unset;
}
`;



const SliderBody = () => {
    return (
        <SSliderBody>
            <BoxBlender />
            <Box>
                <Text>Nossa epecialidade: <br /> experiencia de compra.</Text>
                <DashStyle />
            </Box>

        </SSliderBody >
    );
}

export default SliderBody;