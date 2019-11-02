import React from 'react';

import FlagBrazil from './Flag-Brazil.svg';
import FlagSpain from './Flag-Spain.svg';
import FlagUK from './Flag-UK.svg';
import LanguageMenuStyle from './styles';

class LanguageMenu extends React.Component {

    render() {
        return (
            <LanguageMenuStyle>
                <li>
                    <span>
                        <img src={FlagBrazil} alt="Português" />
                    </span>
                </li>
                <li>
                    <span>
                        <img src={FlagSpain} alt="Espanhol" />
                    </span>
                </li>
                <li>
                    <span>
                        <img src={FlagUK} alt="Inglês" />
                    </span>
                </li>
            </LanguageMenuStyle>
        );
    }

}

export default LanguageMenu;