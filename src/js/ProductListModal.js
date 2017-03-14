import React from 'react'
import ProductList from './ProductList'

class ProductListModal extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id='productListModal' className="product-list-modal">
                <button type="button" className="shadow-modal-close" onClick={ProductList.closeModal}></button>
                <div className="listModalBox">
                    <button type="button" className="btn-modal-close" onClick={ProductList.closeModal}></button>
                    <img id="imageProductListModal" />
                </div>
            </div>
        )
    }
}

export default  ProductListModal