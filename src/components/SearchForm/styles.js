import styled from 'styled-components';

const SearchFormStyle = styled.form`
    border-bottom: 1px solid #7A7A7A;

    input {
        display: inline-block;
        vertical-align: middle;
        width: calc(100% - 18px);
        font-family: 'Ubuntu';
        font-size: 13px;
        color: #7A7A7A;
        border: none;
    }

    button {
        display: inline-block;
        vertical-align: middle;
        padding: 0;
        background-color: #ffffff;
        border: none;
        cursor: pointer;
    }
`;

export default SearchFormStyle;