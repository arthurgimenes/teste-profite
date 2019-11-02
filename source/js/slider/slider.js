const slider = {

    init: () => {
        let screenWidth = document.documentElement.clientWidth;
        let slider = document.querySelector('.js-slider');
        let track = slider.querySelector('.js-slider-track');
        let slides = slider.querySelectorAll('.js-slider-track > div');
        let prev = slider.querySelector('.js-slider-prev');
        let next = slider.querySelector('.js-slider-next');
        let dotsWrapper = slider.querySelector('.js-slider-dots');
        let dots = [];
        let currentSlide = 0;

        dotsWrapper.innerHTML = '';

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.width = screenWidth + 'px';

            let dot = document.createElement('li');
            dot.addEventListener('click', () => {
                for (let ii = 0; ii < dots.length; ii++) {
                    dots[ii].classList.remove('active');
                }
                currentSlide = i;
                dot.classList.add('active');
                track.style.marginLeft = '-' + screenWidth * i + 'px';
            });
            dotsWrapper.appendChild(dot);
            dots.push(dot);
        };

        prev.addEventListener('click', e => {
            e.preventDefault();
            currentSlide = currentSlide === 0 ? currentSlide : currentSlide - 1;
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }
            dots[currentSlide].classList.add('active');
            track.style.marginLeft = '-' + screenWidth * currentSlide + 'px';
        });

        next.addEventListener('click', e => {
            e.preventDefault();
            currentSlide = currentSlide === (dots.length - 1) ? currentSlide : currentSlide + 1;
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }
            dots[currentSlide].classList.add('active');
            track.style.marginLeft = '-' + screenWidth * currentSlide + 'px';
        });

        track.style.width = (screenWidth * slides.length) + 'px';
        track.style.marginLeft = 0;
        dots[0].classList.add('active');
    }

}

export default slider;