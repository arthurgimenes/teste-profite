import styled from 'styled-components';

const FooterMenuStyle = styled.ul`
    margin: 0;
    padding: 0;
    font-size: 12px;

    li {
        margin: 0 0 25px;
        list-style: none;

        button {
            display: block;
            max-width: 195px;
            margin: 0 auto;
            padding: 10px 15px;
            font-size: 12px;
            line-height: 14px;
            color: #ffffff;
            text-transform: uppercase;
            background-color: #FF9F1C;
            border: none;
            border-radius: 5px;
            cursor: pointer;

            svg {
                margin-right: 10px;
            }
            
            span {
                max-width: 130px;
            }

            svg,
            span {
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
        
    li:last-child {
        margin: 0;
    }
`;

export default FooterMenuStyle;