import React from 'react';
import Logotipo from './logo.svg'

const Logo = (props) => {
    return (
        <div className="header-logo col-md-2">
        <a href={props.link}>
            <h1>
                <img src={Logotipo} alt={props.alt} className="logo"/>
            </h1>
        </a>
        </div>
    )
    
}

export default Logo;