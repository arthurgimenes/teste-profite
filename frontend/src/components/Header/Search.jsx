import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi'


const SSearch = styled.div`
width:100%;
display:flex;
justify-content: space-between;
align-items:center;
border-bottom:solid 1px grey;
margin: 0 10%;
padding:5px;
`;

const SInput = styled.input`
   border:none;
   font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1.7rem;

color: #7A7A7A;
`;

const Search = () => {
    return (
        <SSearch>
            <SInput placeholder="O está procurando?" />
            <FiSearch size="2em" />
        </SSearch>
    );
}

export default Search;