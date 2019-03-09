import React from 'react';
import icon from './cart.svg';


const CartHeader = (props) => {
    return (
       <div className="header-cart">
           <a href="/" className="header-cart-icon">
                <img src={icon} alt="Cart"/>
                <span className="header-cart-icon-counter">{props.count}</span>
           </a>
       </div>
    )
    
}

export default CartHeader;