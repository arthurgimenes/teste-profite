import React from 'react';

import MenuButton from '../../components/MenuButton';
import Logo from '../../components/Logo';
import SearchForm from '../../components/SearchForm';
import UserMenu from '../../components/UserMenu';
import LanguageMenu from '../../components/LanguageMenu';
import HeaderStyle from './styles';

class Header extends React.Component {

    render() {
        return (
            <HeaderStyle>
                <div className="wrapper">
                    <div className="left">
                        <MenuButton />
                        <Logo />
                    </div>
                    <div className="center">
                        <SearchForm />
                    </div>
                    <div className="right">
                        <UserMenu />
                        <LanguageMenu />
                    </div>
                </div>
            </HeaderStyle>
        );
    }

}

export default Header;