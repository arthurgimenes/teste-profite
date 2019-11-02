import React from 'react';

import SliderDotStyle from './styles';

class SliderDot extends React.Component {

    render() {
        const { number, current, handleDot } = this.props;
        let currentDot = number === current ? true : false;
        
        return (
            <SliderDotStyle current={currentDot} onClick={handleDot} />
        );
    }

}

export default SliderDot;