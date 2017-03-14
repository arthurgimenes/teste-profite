import React from 'react'
import Search from './Search'

class Header extends React.Component {
    render() {
        return <header className="site-header">
                    <div className="wrapper">
                        <div className="item logo">
                            <img src="images/header/profite_logo_novo.png" />
                        </div>
                        <div className="hello-visitant item">
                            <strong className="title">Olá Visitante</strong>
                            <div className="signuplogin"><a className="link" href="#">Cadastre-se</a> - <a className="link" href="#">Login</a></div>
                        </div>
                        <div className="item --searchbox">
                            <Search placeholder="Buscar por ..."/>
                        </div>
                        <div className="item --flags">
                            <ul className="flags-list">
                                <li className="item"><i className="flag flag-1" /></li>
                                <li className="item"><i className="flag flag-2" /></li>
                                <li className="item"><i className="flag flag-3" /></li>
                            </ul>
                            <div className="skype-number"><span className="number">11 33375618</span></div>
                        </div>
                    </div>
               </header>
    }
}

export default Header