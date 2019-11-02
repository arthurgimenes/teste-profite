import React from 'react';

import ProductSliderTrackStyle from './styles';

class ProductSliderTrack extends React.Component {

    render() {
        const { current, width, slideWidth, children } = this.props;

        return (
            <ProductSliderTrackStyle width={width} marginLeft={ slideWidth * current }>
                {children}
            </ProductSliderTrackStyle>
        );
    }

}

export default ProductSliderTrack;