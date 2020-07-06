import React from 'react';
import styled from 'styled-components';


const SContainer = styled.div`
margin:0;
padding:0;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items:center;
width:1200px;

`;

const Container = ({ children }) => {
    return (
        <SContainer>
            {children}
        </SContainer>
    );
}

export default Container;