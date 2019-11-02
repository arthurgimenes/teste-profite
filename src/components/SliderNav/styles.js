import styled from 'styled-components';

const SliderNavStyle = styled.div`
    position: absolute;
    top: 50%;
    left: ${props => props.direction === 'prev' ? 0 : 'initial'};
    right: ${props => props.direction === 'next' ? 0 : 'initial'};
    transform: translate(0, -50%);

    svg {
        fill: #ffffff;
    }
`;

export default SliderNavStyle;