import React from 'react';
import lupa from './icon-lupa.svg'
const Search = (props) => {
    return (
       <div className="header-search col-md-5">
            <div className="input-group">
                <input type="search" className="form-control" placeholder={props.placeholder}/>
                <div className="input-group-btn">
                    <button type="submit" className="header-search-btn btn btn-default">
                        <img src={lupa} alt=""/>
                    </button>
                </div>
            </div>
       </div>
    )
    
}

export default Search;