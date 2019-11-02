import React from 'react';

import ProfiteLogo from './Profite-Logo.png';
import VtexLogo from './Vtex-Logo.png';
import FooterBrandsStyle from './styles';

class FooterBrands extends React.Component {

    render() {
        return (
            <FooterBrandsStyle>
                <li>
                    <span>Created by</span>
                    <img src={ProfiteLogo} alt="Profite" />
                </li>
                <li>
                    <span>Powered by</span>
                    <img src={VtexLogo} alt="VTEX" />
                </li>
            </FooterBrandsStyle>
        );
    }

}

export default FooterBrands;