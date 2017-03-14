import React from 'react'
import AddressInfo from './AddressInfo'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <footer className="site-footer">
                <div className="fcontainer">
                    <div className="addressgroup">
                        <AddressInfo street="Rua do acre, 77 - sala 1108 " neighborhood="Centro - Rio de Janeiro" phone="+55 (21) 2263.6044" icon="rj" />
                        <AddressInfo street="Rua Cardoso de Melo, 1750" neighborhood="6º Andar Vila Olímpica" phone="+55 (21) 2263.6044" icon="sp" />
                    </div>
                    <div className="buttons-footer-group">
                        <a className="button-footer" href="#contato">
                            <i className="ico-contato"></i><span>Entre em <strong>Contato</strong></span>
                        </a>
                        <a className="button-footer" href="#consultor">
                            <i className="ico-consultor"></i><span>Fale com o nosso <strong>Consultor Online</strong></span>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer