import styled from 'styled-components';

const LogoStyle = styled.h1`
    display: inline-block;
    vertical-align: middle;
    width: 75%;
    height: 30px;

    img {
        display: block;
        margin: 0 auto;
    }

    @media (min-width: 940px) {
        width: 107px;
    }
`;

export default LogoStyle;