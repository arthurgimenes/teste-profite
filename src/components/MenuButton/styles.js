import styled from 'styled-components';

const MenuButtonStyle = styled.a`
    display: inline-block;
    vertical-align: middle;
    width: 25%;

    svg {
        fill: #011627;
    }

    @media (min-width: 940px) {
        display: none;
    }
`;

export default MenuButtonStyle;