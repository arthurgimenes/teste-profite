import React  from 'react';
import icon from './icon-conta.svg';
import CartHeader from './CartHeader';


const MyAccount = (props) => {
    return (
       <div className="header-account col-md-3">
           <a href="/" className="header-acount-menu ">
                <img src={icon} alt="Minha Conta"/>
                <span>Minha Conta</span>
           </a>
           <CartHeader count='1'/> 
       </div>
    )
    
}

export default MyAccount;