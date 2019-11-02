import styled from 'styled-components';

const ProductSliderTrackStyle = styled.div`
    position: relative;
    width: ${props => props.width}px;
    height: 100%;
    margin-left: -${props => props.marginLeft}px;
    font-size: 0;
    z-index: 10;
    transition: all 250ms ease;
`;

export default ProductSliderTrackStyle;