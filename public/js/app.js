(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _slider = require('./slider/slider');

var _slider2 = _interopRequireDefault(_slider);

var _productRequest = require('./productRequest/productRequest');

var _productRequest2 = _interopRequireDefault(_productRequest);

var _productSlider = require('./productSlider/productSlider');

var _productSlider2 = _interopRequireDefault(_productSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_slider2.default.init();
_productRequest2.default.init();
window.addEventListener('resize', function () {
    setTimeout(function () {
        _slider2.default.init();
        _productSlider2.default.init();
    }, 300);
});

},{"./productRequest/productRequest":2,"./productSlider/productSlider":3,"./slider/slider":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _productSlider = require('../productSlider/productSlider');

var _productSlider2 = _interopRequireDefault(_productSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productRequest = {

    init: function init() {
        fetch('json/products.json', {
            method: 'GET'
        }).then(function (res) {
            if (res.status !== 200) {
                console.log('Products not found');
            } else {
                res.json().then(function (data) {

                    data.forEach(function (product) {
                        var productWrapper = document.querySelector('.js-product-slider-track');

                        var ratingTemplate = '';
                        for (var i = 0; i < product.rating; i++) {
                            ratingTemplate += '\n                                <img class="rating__star" src="img/rating-star.svg" alt="Avalia\xE7\xE3o" />\n                            ';
                        }

                        var flagTemplate = '';
                        if (product.flag !== '') {
                            flagTemplate = '\n                                <img class="product__flag" src="img/offer-flag.png" alt="Oferta" />\n                            ';
                        }

                        var productTemplate = '\n                            <div class="product">\n                                ' + flagTemplate + '\n                                <img class="product__image" src="' + product.image + '" alt="' + product.name + '" />\n                                <h4 class="product__name">' + product.name + '</h4>\n                                <div class="rating">\n                                    ' + ratingTemplate + '\n                                </div>\n                                <p class="product__price product__price--old">' + product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '</p>\n                                <p class="product__price">' + product.current_price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '</p>\n                                <p class="product__price product__price--installments">ou em ' + product.max_installments + 'x de ' + (product.current_price / product.max_installments).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '</p>\n                                <a class="product__button href="#">\n                                    <img src="img/icon-cart.svg" alt="Comprar" />\n                                    <span>Comprar</span>\n                                </a>\n                            </div>\n                        ';

                        productWrapper.insertAdjacentHTML("beforeend", productTemplate);
                    });
                    _productSlider2.default.init();
                });
            }
        }).catch(function (err) {
            console.log('Products not found');
        });
    }

};

exports.default = productRequest;

},{"../productSlider/productSlider":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var productSlider = {

    init: function init() {
        var slider = document.querySelector('.js-product-slider');
        var track = slider.querySelector('.js-product-slider-track');
        var products = slider.querySelectorAll('.js-product-slider-track > div');
        var prev = document.querySelector('.js-product-slider-prev');
        var next = document.querySelector('.js-product-slider-next');
        var visibleProducts = slider.offsetWidth - 80 < 940 ? 2 : 4;
        var productSize = slider.offsetWidth / visibleProducts;
        var currentSlide = 0;

        for (var i = 0; i < products.length; i++) {
            products[i].style.width = productSize + 'px';
        }

        prev.addEventListener('click', function (e) {
            e.preventDefault();
            currentSlide = currentSlide === 0 ? currentSlide : currentSlide - 1;
            track.style.marginLeft = '-' + productSize * currentSlide + 'px';
        });

        next.addEventListener('click', function (e) {
            e.preventDefault();
            currentSlide = currentSlide === products.length - visibleProducts ? currentSlide : currentSlide + 1;
            track.style.marginLeft = '-' + productSize * currentSlide + 'px';
        });

        track.style.width = productSize * products.length + 'px';
        track.style.marginLeft = 0;
    }

};

exports.default = productSlider;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var slider = {

    init: function init() {
        var screenWidth = document.documentElement.clientWidth;
        var slider = document.querySelector('.js-slider');
        var track = slider.querySelector('.js-slider-track');
        var slides = slider.querySelectorAll('.js-slider-track > div');
        var prev = slider.querySelector('.js-slider-prev');
        var next = slider.querySelector('.js-slider-next');
        var dotsWrapper = slider.querySelector('.js-slider-dots');
        var dots = [];
        var currentSlide = 0;

        dotsWrapper.innerHTML = '';

        var _loop = function _loop(i) {
            slides[i].style.width = screenWidth + 'px';

            var dot = document.createElement('li');
            dot.addEventListener('click', function () {
                for (var ii = 0; ii < dots.length; ii++) {
                    dots[ii].classList.remove('active');
                }
                currentSlide = i;
                dot.classList.add('active');
                track.style.marginLeft = '-' + screenWidth * i + 'px';
            });
            dotsWrapper.appendChild(dot);
            dots.push(dot);
        };

        for (var i = 0; i < slides.length; i++) {
            _loop(i);
        };

        prev.addEventListener('click', function (e) {
            e.preventDefault();
            currentSlide = currentSlide === 0 ? currentSlide : currentSlide - 1;
            for (var i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }
            dots[currentSlide].classList.add('active');
            track.style.marginLeft = '-' + screenWidth * currentSlide + 'px';
        });

        next.addEventListener('click', function (e) {
            e.preventDefault();
            currentSlide = currentSlide === dots.length - 1 ? currentSlide : currentSlide + 1;
            for (var i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }
            dots[currentSlide].classList.add('active');
            track.style.marginLeft = '-' + screenWidth * currentSlide + 'px';
        });

        track.style.width = screenWidth * slides.length + 'px';
        track.style.marginLeft = 0;
        dots[0].classList.add('active');
    }

};

exports.default = slider;

},{}]},{},[1]);
