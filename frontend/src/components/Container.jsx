import React from 'react';
import styled from 'styled-components';


const SContainer = styled.div`
margin:0;
padding:0;
display:flex;
justify-content: center;
align-items:center;
width:100%;
background: #fff;
`;

const Container = ({ children }) => {
    return (
        <SContainer>
            {children}
        </SContainer>
    );
}

export default Container;