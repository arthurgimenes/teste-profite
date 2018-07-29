import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form className="search">
        <input className="search__input" type="text"
          placeholder="O que está procurando?"
        />
        <button className="search__button" type="submit">
          <img className="search__img"
            src={require("../../assets/img/header/search.svg")}
            alt="Procurar"
          />
        </button>
      </form>
    );
  }
}

export default Search;