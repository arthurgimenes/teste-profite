import React from 'react';
import sizeMe from 'react-sizeme';

import Product from '../../components/Product';
import ProductSliderTrack from '../../components/ProductSliderTrack';
import ProductSliderNav from '../../components/ProductSliderNav';
import ProductSliderStyle from './styles';

class ProductSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            currentSlide: 0
        }
        this.handleSlide = this.handleSlide.bind(this);
    }

    handleSlide(slide) {
        this.setState({ currentSlide: slide });
    }

    componentDidMount() {
        fetch('http://localhost:3000/json/products.json', {
            method: 'GET'
        })
        .then(res => {
            if (res.status !== 200) {
                console.log('Products not found');
            } else {
                res.json().then(data => {
                    this.setState({ products: data });
                });
            }
        })
        .catch(err => {
            console.log('Products not found');
        });
    }

    render() {
        const { products, currentSlide } = this.state;
        let containerWidth = this.props.size.width;
        let visibleItems = (this.props.size.width) < 940 ? 2 : 4;

        const items = this.state.products.map((item) => {
            return (
                <Product key={item._id} data={item} width={ containerWidth / visibleItems } />
            );
        });

        return (
            <div>
                <ProductSliderStyle>
                    <ProductSliderTrack current={currentSlide} width={ containerWidth * products.length } slideWidth={ containerWidth / visibleItems }>
                        {items}
                    </ProductSliderTrack>
                </ProductSliderStyle>

                <ProductSliderNav direction="prev" current={currentSlide} count={products.length} visible={visibleItems} handleNav={this.handleSlide} />
                <ProductSliderNav direction="next" current={currentSlide} count={products.length} visible={visibleItems} handleNav={this.handleSlide} />
            </div>
        );
    }

}

export default sizeMe()(ProductSlider);