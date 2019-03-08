import React from 'react';
import br from './br.svg';
import es from './es.svg';
import gb from './gb.svg';
const MenuIdiomas = (props) => {
    const idiomas =   [
             {name: 'Portugues', link: '/', icon: br},
             {name: 'Español', link: '/', icon: es },
             {name: 'English', link: '/', icon:  gb}
          ]
    console.log(idiomas);
    return (
       <div className="header-languages col-md-2">
          <ul className="header-languages-menu">
          {idiomas.map((itens, key) => {
              return(
                <li key={key} className="header-languages-menu-item">
                    <a href={itens.link}>
                        <img src={itens.icon} alt={itens.name} title={itens.name}/>
                    </a>
                </li>
              )
          })}
          </ul>
       </div>
    )
    
}

export default MenuIdiomas;