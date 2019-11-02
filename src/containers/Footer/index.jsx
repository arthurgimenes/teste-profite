import React from 'react';

import Address from '../../components/Address';
import FooterMenu from '../../components/FooterMenu';
import FooterBrands from '../../components/FooterBrands';
import FooterStyle from './styles';

class Footer extends React.Component {

    render() {
        return (
            <FooterStyle>
                <div className="wrapper">
                    <div className="left">
                        <h5 className="title">Localização</h5>
                        <Address>
                            <h6>São Paulo</h6>
                            <p>Rua do Rócio, 423/1801</p>
                            <p>Vila Olímpia - SP</p>
                            <p>04552-000</p>
                            <p>+55 11 3333 3333</p>
                        </Address>
                        <Address>
                            <h6>Rio de Janeiro</h6>
                            <p>Vol. da Pátria, 301/702</p>
                            <p>Botafogo - RJ</p>
                            <p>22270-000</p>
                            <p>+55 21 3333 3333</p>
                        </Address>
                    </div>
                    <div className="center">
                        <FooterMenu />
                    </div>
                    <div className="right">
                        <FooterBrands />
                    </div>
                </div>
            </FooterStyle>
        );
    }

}

export default Footer;