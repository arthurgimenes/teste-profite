import styled from 'styled-components';

const HeaderStyle = styled.header`
    padding: 15px 0;
    font-size: 0;
    background-color: #ffffff;

    .wrapper {
        position: relative;
        max-width: 1240px;
        height: 100%;
        margin: 0 auto;
        padding: 0 40px 40px;
    }

    .left,
    .center,
    .right {
        display: inline-block;
        vertical-align: middle;
    }
    
    .left {
        width: 80%;
    }
    
    .center {
        position: absolute;
        left: 40px;
        bottom: 0;
        width: calc(100% - 80px);
        text-align: center;
    }
    
    .right {
        width: 20%;
        text-align: right;
    }

    @media (min-width: 940px) {
        padding: 25px 0;

        .wrapper {
            padding: 0 40px;
        }

        .left {
            width: 17%;
        }

        .center {
            position: relative;
            width: 40%;
        }

        .right {
            width: 43%;
        }
    }
`;

export default HeaderStyle;