import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi'


const SSearch = styled.div`
width:100%;
background:grey;
display:flex;
justify-content: center;
align-items:center;
`;

const Search = () => {
    return (
        <SSearch>
            <input placeholder="O está procurando?" />
            <FiSearch />
        </SSearch>
    );
}

export default Search;