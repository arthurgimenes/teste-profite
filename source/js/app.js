import slider from './slider/slider';
import productRequest from './productRequest/productRequest';
import productSlider from './productSlider/productSlider';

slider.init();
productRequest.init();
window.addEventListener('resize', () => {
    setTimeout(() => {
        slider.init();
        productSlider.init();
    }, 300);
});