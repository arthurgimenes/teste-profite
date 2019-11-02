import styled from 'styled-components';

const FooterStyle = styled.footer`
    padding: 25px 0;
    font-size: 0;
    background-color: #011627;
    border-bottom: 10px solid #2EC4B6;

    .wrapper {
        position: relative;
        max-width: 1240px;
        height: 100%;
        margin: 0 auto;
        padding: 0 40px;
    }

    .left,
    .center,
    .right {
        width: 100%;
    }
    
    .center {
        margin: 20px 0 0;
        text-align: center;
    }
    
    .right {
        margin: 40px 0 0;
        text-align: center;
    }
    
    .title {
        margin: 0 0 20px;
        font-size: 20px;
        font-weight: 700;
        color: #ffffff;
    }

    .title:after {
        content: '';
        display: block;
        width: 65px;
        height: 4px;
        margin: 10px 0 0;
        background-color: #FF9F1C;
    }

    @media (min-width: 940px) {
        .left,
        .center,
        .right {
            display: inline-block;
            vertical-align: bottom;
            margin: 0;
            width: 33.33%;
        }
        
        .right {
            text-align: right;
        }
    }
`;

export default FooterStyle;