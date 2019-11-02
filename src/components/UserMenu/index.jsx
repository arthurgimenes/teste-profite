import React from 'react';

import UserMenuStyle from './styles';

class UserMenu extends React.Component {

    render() {
        return (
            <UserMenuStyle>
                <li className="account">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fillRule="evenodd" clipRule="evenodd" d="M9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9 2.70001C10.494 2.70001 11.7 3.90601 11.7 5.40001C11.7 6.89401 10.494 8.10001 9 8.10001C7.506 8.10001 6.3 6.89401 6.3 5.40001C6.3 3.90601 7.506 2.70001 9 2.70001ZM9 15.48C6.75 15.48 4.761 14.328 3.6 12.582C3.627 10.791 7.2 9.81 9 9.81C10.791 9.81 14.373 10.791 14.4 12.582C13.239 14.328 11.25 15.48 9 15.48Z" fill="#011627"></path></svg>
                        <span>Minha Conta</span>
                    </button>
                </li>
                <li className="cart">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18"><path fillRule="evenodd" clipRule="evenodd" d="M5.39704 14.4C4.40761 14.4 3.60706 15.21 3.60706 16.2C3.60706 17.19 4.40761 18 5.39704 18C6.38648 18 7.19602 17.19 7.19602 16.2C7.19602 15.21 6.38648 14.4 5.39704 14.4Z" fill="#011627"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.3918 14.4C13.4023 14.4 12.6018 15.21 12.6018 16.2C12.6018 17.19 13.4023 18 14.3918 18C15.3812 18 16.1908 17.19 16.1908 16.2C16.1908 15.21 15.3812 14.4 14.3918 14.4Z" fill="#011627"></path><path fillRule="evenodd" clipRule="evenodd" d="M5.54984 11.475L5.57682 11.367L6.38636 9.89997H13.0875C13.7622 9.89997 14.3558 9.53097 14.6616 8.97297L18.1337 2.66399L16.5686 1.79999H16.5596L15.5701 3.59999L13.0875 8.09998H6.77314L6.65621 7.85698L4.64136 3.59999L3.78684 1.79999L2.94132 0H0V1.79999H1.79897L5.03713 8.63098L3.82282 10.836C3.6789 11.088 3.59795 11.385 3.59795 11.7C3.59795 12.69 4.40749 13.5 5.39692 13.5H16.1908V11.7H5.77471C5.65778 11.7 5.54984 11.601 5.54984 11.475Z" fill="#011627"></path></svg>
                        <span className="badge">1</span>
                    </button>
                </li>
            </UserMenuStyle>
        );
    }

}

export default UserMenu;