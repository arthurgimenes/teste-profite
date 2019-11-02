import React from 'react';

import ProductSlider from '../ProductSlider';
import ProductsStyle from './styles';

class Products extends React.Component {

    render() {
        return (
            <ProductsStyle>
                <div className="wrapper">
                    <h3 className="title">Produtos</h3>
                    <ProductSlider />
                </div>
            </ProductsStyle>
        );
    }

}

export default Products;