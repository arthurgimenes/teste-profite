import React from 'react';
import './header.scss';
import Logo from './Logo'
import Search from './Search'
import MyAccount from './MyAccount';
import MenuIdiomas from './MenuIdiomas'
const Header = (props) => {
    return (
       <header className='header'>
            <div className="row">
               <Logo link='/' alt='profite Store'/>
               <Search placeholder='O que está procurando ?'/>
               <MyAccount />
               <MenuIdiomas/>  
            </div>
       </header>
    )
    
}

export default Header;