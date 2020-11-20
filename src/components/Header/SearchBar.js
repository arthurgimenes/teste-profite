import React from 'react';
import '../../scss/common.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <>
    <div className="header__search desktop">
      <input type="text" placeholder="O que está procurando?" />
      <button className="btn btn-search"><FontAwesomeIcon icon={faSearch} /></button>
    </div>
    </>
  )
}

export default SearchBar;