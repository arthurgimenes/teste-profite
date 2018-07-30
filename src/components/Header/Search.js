import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form className="search">
        <input className="search__input" type="text"
          placeholder="O que está procurando?"
        />
      </form>
    );
  }
}

export default Search;