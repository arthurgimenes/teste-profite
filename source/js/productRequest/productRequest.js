import productSlider from '../productSlider/productSlider';

const productRequest = {

    init: () => {
        fetch('json/products.json', {
            method: 'GET'
        })
        .then(res => {
            if (res.status !== 200) {
                console.log('Products not found');
            } else {
                res.json().then(data => {
                    
                    data.forEach(product => {
                        let productWrapper = document.querySelector('.js-product-slider-track');

                        let ratingTemplate = '';
                        for (let i = 0; i < product.rating; i++) {
                            ratingTemplate += `
                                <img class="rating__star" src="img/rating-star.svg" alt="Avaliação" />
                            `;
                        }

                        let flagTemplate = '';
                        if (product.flag !== '') {
                            flagTemplate = `
                                <img class="product__flag" src="img/offer-flag.png" alt="Oferta" />
                            `;
                        }

                        let productTemplate = `
                            <div class="product">
                                ${flagTemplate}
                                <img class="product__image" src="${product.image}" alt="${product.name}" />
                                <h4 class="product__name">${product.name}</h4>
                                <div class="rating">
                                    ${ratingTemplate}
                                </div>
                                <p class="product__price product__price--old">${(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                <p class="product__price">${(product.current_price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                <p class="product__price product__price--installments">ou em ${product.max_installments}x de ${(product.current_price / product.max_installments).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                <a class="product__button href="#">
                                    <img src="img/icon-cart.svg" alt="Comprar" />
                                    <span>Comprar</span>
                                </a>
                            </div>
                        `;

                        productWrapper.insertAdjacentHTML("beforeend", productTemplate);

                    });
                    productSlider.init();
                });
            }
        })
        .catch(err => {
            console.log('Products not found');
        });
    }

}

export default productRequest;