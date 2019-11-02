import React from 'react';

import FooterMenuStyle from './styles';

class FooterMenu extends React.Component {

    render() {
        return (
            <FooterMenuStyle>
                <li>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15"><path fillRule="evenodd" clipRule="evenodd" d="M15.2338 0.666656H1.72728C0.798711 0.666656 0.0474125 1.42666 0.0474125 2.35555L0.0389709 12.4889C0.0389709 13.4178 0.798711 14.1778 1.72728 14.1778H15.2338C16.1623 14.1778 16.9221 13.4178 16.9221 12.4889V2.35555C16.9221 1.42666 16.1623 0.666656 15.2338 0.666656ZM15.2338 4.04445L8.48051 8.26667L1.72726 4.04445V2.35556L8.48051 6.57778L15.2338 2.35556V4.04445Z" fill="white"></path></svg>
                        <span>Entre em contato</span>
                    </button>
                </li>
                <li>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19"><path fillRule="evenodd" clipRule="evenodd" d="M8.16884 0.133331C3.97339 0.133331 0.571442 3.53644 0.571442 7.73333V13.6444C0.571442 15.0462 1.70261 16.1778 3.10391 16.1778H5.63638V9.42222H2.25975V7.73333C2.25975 4.46533 4.90196 1.82222 8.16884 1.82222C11.4357 1.82222 14.0779 4.46533 14.0779 7.73333V9.42222H10.7013V16.1778H14.0779V17.0222H8.16884V18.7111H13.2338C14.6351 18.7111 15.7662 17.5796 15.7662 16.1778V7.73333C15.7662 3.53644 12.3643 0.133331 8.16884 0.133331Z" fill="white"></path></svg>
                        <span>Fale com o nosso consultor online</span>
                    </button>
                </li>
            </FooterMenuStyle>
        );
    }

}

export default FooterMenu;