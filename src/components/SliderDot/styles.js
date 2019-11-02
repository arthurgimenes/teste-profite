import styled from 'styled-components';

const SliderDotStyle = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background-color: ${props => props.current ? '#ff9f1c' : '#BDBDBD'};
    border-radius: 50%;
    cursor: pointer;
`;

export default SliderDotStyle;