import styled from 'styled-components';

const SlideStyle = styled.div`
    position: relative;
    display: inline-block;
    width: ${props => props.width}px;
    height: 100%;
    background-color: #011627;

    .wrapper {
        position: relative;
        max-width: 1240px;
        height: 100%;
        margin: 0 auto;
        padding: 0 40px;
    }

    .background {
        position absolute;
        top 0;
        right 0;
        width 100%;
        height 100%;
        background-image url(${props => props.image});
        opacity .5;
    }
    
    .text {
        position: absolute;
        margin: 0;
        top: 50%;
        left: 40px;
        width: 80%;
        font-size: 30px;
        line-height: 1.4em;
        color: #ffffff;
        transform: translate(0, -50%);
    }

    .text:after {
        content: '';
        display: block;
        width: 65px;
        height: 4px;
        margin: 10px 0 0;
        background-color: #FF9F1C;
    }

    @media (min-width: 940px) {
        .background {
            width: 50%;
            opacity: .75;
        }

        .text {
            width: 40%;
            font-size: 45px;
        }
    }
`;

export default SlideStyle;