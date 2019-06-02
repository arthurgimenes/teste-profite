import React, { Component } from 'react';

const data = { "slide": [{ "id": 1, "index": 0 }, { "id": 2, "index": 1 }, { "id": 3, "index": 2 }] };

export default class Slide extends Component {

    constructor(props) {
        super(props);
        this.state = {
            properties: data.slide,
            property: data.slide[0]
        }


    }

    componentWillUpdate() {

        setTimeout(() => {
            let newIndex = this.state.property.index + 1;
            if (this.state.property.index === 2) newIndex = 0;
            this.setState({ property: data.slide[newIndex] });

        }, 3000);
    }

    nextSlide = () => {
        const newIndex = this.state.property.index + 1;
        console.log(newIndex);
        this.setState({
            property: data.slide[newIndex]
        })
    }

    prevSlide = () => {

        const newIndex = this.state.property.index - 1;
        this.setState({
            property: data.slide[newIndex]
        })
    }


    render() {
        const { property } = this.state;

        return (
            <div className='slideitens'>
                <div className='slideitens-b'>
                    <div className='previous'>
                        <div className='seta-slide'>
                            <button onClick={() => this.prevSlide()} disabled={property.index === 0}>
                                <img src={require(`../img/slide/prev.png`)} alt='previous' />
                            </button>
                        </div>
                    </div>
                    <div className='conteiner-slide'>
                        <img src={require(`../img/slide/${property.id}.png`)} alt='slide' />
                    </div>
                    <div className='next'>
                        <div className='seta-slide'>
                            <button onClick={() => this.nextSlide()} disabled={property.index === data.slide.length - 1} >
                                <img src={require(`../img/slide/nex.png`)} alt='next' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

