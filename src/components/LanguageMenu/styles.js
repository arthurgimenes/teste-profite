import styled from 'styled-components';

const LanguageMenuStyle = styled.ul`
    display: none;

    @media (min-width: 940px) {
        display: inline-block;
        vertical-align: middle;
        margin-left: 20px;
        padding-left: 20px;
        border-left: 1px solid #7A7A7A;

        li {
            display: inline-block;
            vertical-align: middle;
            margin-right: 20px;
        }

        li:last-child {
            margin-right: 0;
        }
    }
`;

export default LanguageMenuStyle;