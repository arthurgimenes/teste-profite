import styled from 'styled-components';

const ProductSliderNavStyle = styled.a`
    position: absolute;
    top: 50%;
    left: ${props => props.direction === 'prev' ? '-40px' : 'initial'};
    right: ${props => props.direction === 'next' ? '-40px' : 'initial'};
    transform: translate(0, -50%);

    svg {
        fill: #011627;
    }
`;

export default ProductSliderNavStyle;