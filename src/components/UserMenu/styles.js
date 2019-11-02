import styled from 'styled-components';

const LanguageMenuStyle = styled.ul`
    display: inline-block;
    vertical-align: middle;

    li {
        display: none;

        button {
            font-size: 13px;
            color: #7A7A7A;
            background-color: #ffffff;
            border: none;
            cursor: pointer;

            span,
            svg {
                display: inline-block;
                vertical-align: middle;
            }

            svg {
                margin-right: 3px;
            }
        }
    }

    li.cart {
        display: inline-block;
    }
        
    .badge {
        padding: 2px 4px;
        font-size: 10px;
        line-height: 10px;
        color: #ffffff;
        background-color: #2EC4B6;
        border-radius: 50%;
    }

    @media (min-width: 940px) {
        li {
            display: inline-block;
            vertical-align: middle;
            margin-right: 20px;
        }

        li.cart {
            margin-right: 0;
        }
    }
`;

export default LanguageMenuStyle;