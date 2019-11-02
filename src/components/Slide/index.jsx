import React from 'react';

import BackgroundFile from './slider.jpg';
import SlideStyle from './styles';

class Slide extends React.Component {

    render() {
        const { width, title } = this.props;
        return (
            <SlideStyle width={width} image={BackgroundFile}>
                <div className="background"></div>
                <div className="wrapper">
                    <h2 className="text">{title}</h2>
                </div>
            </SlideStyle>
        );
    }

}

export default Slide;