import styled from 'styled-components';

const FooterBrandsStyle = styled.ul`
    margin: 0;
    padding: 0;
    font-size: 12px;

    li {
        display: inline-block;
        vertical-align: bottom;
        margin-left: 15px;

        span {
            display: block;
            margin: 0 0 5px;
            font-size: 10px;
            color: #ffffff;
            text-align: left;
        }

        img {
            display: inline-block;
        }
    }
`;

export default FooterBrandsStyle;