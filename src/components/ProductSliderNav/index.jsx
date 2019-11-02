import React from 'react';

import ProductSliderNavStyle from './styles';

class ProductSliderNav extends React.Component {

    constructor(props) {
        super(props);
        this.handleNav = this.handleNav.bind(this);
    }

    handleNav() {
        const { direction, current, count, visible, handleNav } = this.props;
        let currentSlide = 0;
        
        if (direction === 'prev') {
            currentSlide = current === 0 ? current : current - 1;
        } else if (direction === 'next') {
            currentSlide = current === (count - visible) ? current : current + 1;
        }
        
        handleNav(currentSlide);
    }

    render() {
        const { direction } = this.props;

        let svg = direction === 'prev' ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg> ;

        return (
            <ProductSliderNavStyle direction={direction} onClick={this.handleNav}>
                {svg}
            </ProductSliderNavStyle>
        );
    }

}

export default ProductSliderNav;