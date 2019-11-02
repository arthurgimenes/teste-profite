import styled from 'styled-components';

const SliderStyle = styled.div`
    position: relative;
    width: 100%;
    height: 430px;
    overflow: hidden;

    .wrapper {
        position: relative;
        max-width: 1240px;
        height: 100%;
        margin: 0 auto;
        padding: 0 40px;
    }

    .dots {
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translate(-50%, 0);
        z-index: 11;
    }

    .nav {
        position absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
`;

export default SliderStyle;