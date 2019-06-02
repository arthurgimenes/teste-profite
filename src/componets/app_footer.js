import React from 'react';

const Footer = () => (
    <footer>
        <div className='footerall'>
            <div className='location'>
                <h2>Localização</h2>
                <hr/>
                <div className='address'>
                <div className='SP'>
                    <h3>São Paulo</h3>
                    <p><label>Rua do Rócio, 423/1801</label></p>
                    <p><label>Vila Olimpia - SP</label></p>
                    <p><label>04552-000</label></p>
                    <p><label>+55 11 3333 3333</label></p>
                </div>
                <div className='RJ'>
                    <h3>Rio de Janeiro</h3>
                    <p><label>Vól. da Pátria, 301/702</label></p>
                    <p><label>Botafogo - RJ</label></p>
                    <p><label>22270-000</label></p>
                    <p><label>+55 21 3333 3333</label></p>
                </div>
                </div>
            </div>
            <div className='center-button'>
                <div className='button-position'>
                    <p>
                        <button className='btn'>
                            <img src={require('../img/mail.png')} alt='mail' />
                            ENTRE EM CONTATO
                </button>
                    </p>
                    <p>
                        <button className='btn'>
                            <div style={{ 'float': 'left', 'width': 'auto' }}>
                                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.16884 0.133331C3.97339 0.133331 0.571442 3.53644 0.571442 7.73333V13.6444C0.571442 15.0462 1.70261 16.1778 3.10391 16.1778H5.63638V9.42222H2.25975V7.73333C2.25975 4.46533 4.90196 1.82222 8.16884 1.82222C11.4357 1.82222 14.0779 4.46533 14.0779 7.73333V9.42222H10.7013V16.1778H14.0779V17.0222H8.16884V18.7111H13.2338C14.6351 18.7111 15.7662 17.5796 15.7662 16.1778V7.73333C15.7662 3.53644 12.3643 0.133331 8.16884 0.133331Z" fill="white" />
                                </svg>
                            </div>
                            <div>FALE COM UM NOSSO CONSULTOR ONLINE</div>
                        </button>
                    </p>
                </div>
            </div>
            <div className='developer'>
                <img src={require('../img/dev.png')} alt='developer' />
            </div>
        </div>
    </footer>
);

export default Footer;
