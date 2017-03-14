import React from 'react'
import axios from 'axios'
import {lory} from 'lory.js'
import Trumps from './Trumps'

class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            error: false,
            mobile: false,
            modalImage: undefined
        }
    }
    static openModal(modalImage) {
        document.getElementById('productListModal').classList.add('active')
        document.getElementById('imageProductListModal').src = `images/products/${modalImage}`
    }
    static closeModal(modalImage,modalId) {
        document.getElementById('productListModal').classList.remove('active')
    }
    renderOldPrice(price) {
        return (
            <div className="oldprice">De R$ {price}</div>
        )
    }
    getProducts() {
        axios.get('sapatos.json')
        .then((response)=> {
            this.setState({
                products: response.data.products
            })
        })
        .catch((error)=> {
            this.setState({error:true})
        })
    }
    renderError() {
        return (
            <div>
                Falha ao carregar a lista de produtos
            </div>
        )
    }
    componentWillMount() {
        if(window.innerWidth <= 975 ) {
            this.setState({mobile: true})
        }else {
            this.setState({mobile: false})
        }
    }
    componentDidMount() {
        this.getProducts()
        this.makeSlider()
    }
    componentDidUpdate() {
        this.makeSlider()
    }
    renderProducts() {
        return (
            <div className="slider products-list">
                <div className="frame js_frame">
                    <ul className="slides js_slides">
                        {this.slidesNode()}
                    </ul>
                </div>
                <div className="nav">
                    <span className="js_prev prev"></span>
                    <span className="js_next next"></span>
                </div>
            </div>
        )
    }
    zoom(key) {
        ProductList.openModal(this.state.products[key].image.zoom)
    }
    slidesNode() {
        return this.state.products.map((slide, key) => {
            return (
                <li className="js_slide product" key={key}>
                    <div>
                        <img className="image" src={`images/products/${slide.image.hover}`} onClick={this.zoom.bind(this,key)}/>
                        <strong className="name">{slide.name}</strong>
                    </div>
                    <div>
                        <div className="price-group">
                            <div className="rating"></div>
                            {slide.old_amount ? this.renderOldPrice( Trumps.formatReal(slide.old_amount) ) : ''}
                            <div className="price">
                                Por: <i>R$ {Trumps.formatReal(slide.amount)}</i>
                            </div>
                            <div className="installments">
                                ou <b><i>até {`${slide.max_installments}X`}</i></b> de 
                                <b><i>R${Trumps.formatReal(Trumps.getInstallments(slide.max_installments,slide.amount))}</i></b>
                            </div>
                            
                        </div>
                        <div className="buy-group">
                            <button className="btn-buy">Comprar</button>
                            <div className="saveup">Economize: R$ {Trumps.formatReal(slide.saveup_amount)}</div>
                        </div>
                    </div>
                </li>
            )
        })
    }
    makeSlider() {
        if(this.state.products.length > 0) {
            var simple = document.querySelector('.products-list')

            if(this.state.mobile) {
                lory(simple, {
                    slidesToScroll: 2
                })
            }else {
                lory(simple, {
                    slidesToScroll: 4
                })
            }
        }
    }
    renderLoading() {
        let loadingStyle = {
            background:'#FBC436',
            padding: '1em',
            minHeight: '300px'
        }
        return (
            <div style={loadingStyle}>
                <center><img src="images/oval-loader.svg" width="70" alt="" /></center>
            </div>
        )
    }
    render() {
        return (
            this.state.error ? this.renderError() : (this.state.products.length > 0 ? this.renderProducts() : this.renderLoading())
        )
    }
}

export default ProductList