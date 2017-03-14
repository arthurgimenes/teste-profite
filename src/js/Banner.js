import React from 'react'
import {lory} from 'lory.js'
import axios from 'axios'

class Banner extends React.Component {
    constructor(props) {
        super(props)
        if(window.innerWidth <= 640 ) {
            this.state = {
                mobile: true,
                slides: []
            }
        }else {
            this.state = {
                mobile: false,
                slides: []
            }
        }
    }
    makeSlider() {
        if(this.state.slides.length > 0) {
            var simple_dots       = document.querySelector('.js_slider')
            var dot_count         = simple_dots.querySelectorAll('.js_slide').length
            var dot_container     = simple_dots.querySelector('.js_dots')
            var dot_list_item     = document.createElement('li')
            dot_list_item.className = 'dot'

            function handleDotEvent(e) {
                if (e.type === 'before.lory.init') {
                    for (var i = 0, len = dot_count; i < len; i++) {
                        var clone = dot_list_item.cloneNode()
                        dot_container.appendChild(clone)
                    }
                    dot_container.childNodes[0].classList.add('active')
                }
                if (e.type === 'after.lory.init') {
                    for (var i = 0, len = dot_count; i < len; i++) {
                        dot_container.childNodes[i].addEventListener('click', function(e) {
                            dot_navigation_slider.slideTo(Array.prototype.indexOf.call(dot_container.childNodes, e.target))
                        })
                    }
                }
                if (e.type === 'after.lory.slide') {
                    for (var i = 0, len = dot_container.childNodes.length; i < len; i++) {
                        dot_container.childNodes[i].classList.remove('active')
                    }
                    dot_container.childNodes[e.detail.currentSlide - 1].classList.add('active')
                }
                if (e.type === 'on.lory.resize') {
                    for (var i = 0, len = dot_container.childNodes.length; i < len; i++) {
                        dot_container.childNodes[i].classList.remove('active')
                    }
                    dot_container.childNodes[0].classList.add('active')
                }
            }
            simple_dots.addEventListener('before.lory.init', handleDotEvent)
            simple_dots.addEventListener('after.lory.init', handleDotEvent)
            simple_dots.addEventListener('after.lory.slide', handleDotEvent)
            simple_dots.addEventListener('on.lory.resize', handleDotEvent)

            var dot_navigation_slider = lory(simple_dots, {
                infinite: 1,
                enableMouseEvents: true
            })
        }
    }
    getSlides() {
        axios.get('banner-slides.json')
        .then((response)=> {
            this.setState({
                slides: response.data.slides
            })
        })
        .catch(function (error) {
            console.log(error)
        })
    }
    componentWillMount() {
        
    }
    componentDidMount() {
        this.getSlides()
        this.makeSlider()
    }
    componentDidUpdate() {
        this.makeSlider()
    }
    slidesNode() {
        return this.state.slides.map((slide, key) => {
            return (
                <li className="js_slide" key={key}>
                    <img src={this.state.mobile ? slide.mobile : slide.image}  />
                </li>
            )
        })
    }
    renderSlider() {
        return (
            <div id={this.props.id} className="banner-slider js_slider">
                <div className="frame js_frame">
                    <ul className="slides js_slides">
                        { this.slidesNode() }
                    </ul>
                </div>
                <div className="nav">
                    <span className="js_prev prev"></span>
                    <span className="js_next next"></span>
                </div>
                <ul className="js_dots"></ul>
            </div>
        )
    }
    renderLoading() {
        let loadingStyle = {
            background:'#FBC436',
            padding: '1em'
        }
        return (
            <div className="banner-slider" style={loadingStyle}>
                <center><img src="images/oval-loader.svg" width="70" alt="" /></center>
            </div>
        )
    }
    render() {
        return (
            this.state.slides.length > 0 ? this.renderSlider() : this.renderLoading() 
        )
    }
}

export default Banner