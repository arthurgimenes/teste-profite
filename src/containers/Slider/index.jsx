import React from 'react';

import SliderTrack from '../../components/SliderTrack';
import Slide from '../../components/Slide';
import SliderDot from '../../components/SliderDot';
import SliderNav from '../../components/SliderNav';
import SliderStyle from './styles';

class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slidesCount: 3,
            currentSlide: 0
        }
        this.handleSlide = this.handleSlide.bind(this);
    }

    handleSlide(slide) {
        this.setState({ currentSlide: slide });
    }

    render() {
        const { slidesCount, currentSlide } = this.state;
        let screenWidth = document.documentElement.clientWidth;
        let dotList = [];

        for (let i = 0; i < slidesCount; i++) {
            dotList.push(
                <SliderDot key={i} number={i} current={currentSlide} handleDot={() => this.handleSlide(i)}/>
            );
        }

        return (
            <SliderStyle>
                <SliderTrack current={currentSlide} width={ screenWidth * slidesCount } slideWidth={screenWidth}>
                    <Slide width={ screenWidth } title="(1) Nossa especialidade: experiência de compra." />
                    <Slide width={ screenWidth } title="(2) Nossa especialidade: experiência de compra." />
                    <Slide width={ screenWidth } title="(3) Nossa especialidade: experiência de compra." />
                </SliderTrack>

                <div className="dots">
                    {dotList}
                </div>

                <div className="nav">
                    <div className="wrapper">
                        <SliderNav direction="prev" current={currentSlide} count={slidesCount} handleNav={this.handleSlide} />
                        <SliderNav direction="next" current={currentSlide} count={slidesCount} handleNav={this.handleSlide} />
                    </div>
                </div>
            </SliderStyle>
        );
    }

}

export default Slider;