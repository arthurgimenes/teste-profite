import React from 'react';

import LogoFile from './Profite-Logo.svg';
import LogoStyle from './styles';

class Logo extends React.Component {

    render() {
        return (
            <LogoStyle>
                <img src={LogoFile} alt="Profite" />
            </LogoStyle>
        );
    }

}

export default Logo;