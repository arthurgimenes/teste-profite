const productSlider = {

    init: () => {
        let slider = document.querySelector('.js-product-slider');
        let track = slider.querySelector('.js-product-slider-track');
        let products = slider.querySelectorAll('.js-product-slider-track > div');
        let prev = document.querySelector('.js-product-slider-prev');
        let next = document.querySelector('.js-product-slider-next');
        let visibleProducts = (slider.offsetWidth - 80) < 940 ? 2 : 4;
        let productSize = (slider.offsetWidth / visibleProducts);
        let currentSlide = 0;

        for (let i = 0; i < products.length; i++) {
            products[i].style.width = productSize + 'px';
        }

        prev.addEventListener('click', e => {
            e.preventDefault();
            currentSlide = currentSlide === 0 ? currentSlide : currentSlide - 1;
            track.style.marginLeft = '-' + productSize * currentSlide + 'px';
        });

        next.addEventListener('click', e => {
            e.preventDefault();
            currentSlide = currentSlide === (products.length - visibleProducts) ? currentSlide : currentSlide + 1;
            track.style.marginLeft = '-' + productSize * currentSlide + 'px';
        });

        track.style.width = (productSize * products.length) + 'px';
        track.style.marginLeft = 0;
    }

}

export default productSlider;