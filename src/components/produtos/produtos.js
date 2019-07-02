import React from 'react'
import img from '../../assets/imgs/produto1.png'
import Estrelas from '../../assets/imgs/produto/estrela.js'
import './produtos.scss'

const api = require('../../api.json')


const Produtos = () => {
    let produtos = [];
    for (let i in api){
        produtos.push(
            <div className="item" key={api[i]}>
                <div >
                    <img src={img}  className="img"/>
                    <p className="tituloProduto">{api[i]['titulo']}</p>
                    <div className="estrelas">
                        <Estrelas />
                    </div>
                    <p className="valorAntigo">{api[i]['valorAntigo']}</p>
                    <p className="valorNovo">{api[i]['valorNovo']}</p>
                    <p className="valorParcelado">{api[i]['valorParcelado']}</p>
                    <button className="btn">Comprar</button>
                </div>
            </div>    
        ) 
    }
    return (
        <div className="produtos">
            <p className="text">Produtos</p>
            <div className="line">
            </div>
            <div className="listItem">
                {produtos}
            </div>
        </div>
    )
}


export default Produtos;