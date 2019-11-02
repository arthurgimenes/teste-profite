import React from 'react';

import SliderTrackStyle from './styles';

class SliderTrack extends React.Component {

    render() {
        const { current, width, slideWidth, children } = this.props;

        return (
            <SliderTrackStyle width={width} marginLeft={ slideWidth * current }>
                {children}
            </SliderTrackStyle>
        );
    }

}

export default SliderTrack;