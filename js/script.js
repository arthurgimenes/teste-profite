(function() {
  'use strict';

  // Simulate a server response
  var products = [
    {
      id: 1,
      name: 'Sandália Ferracini Ecologic',
      price: 95.92,
      sale_price: false,
      stars: 0,
      qtd_parcelas: 4, // Esqueci a tradução disso ( ._.)
      img_url: './img/products/shoe1.png',
      zoom_img_url: './img/products/shoe1_zoom.png'
    },
    {
      id: 2,
      name: 'Chinelo Kildare',
      price: 99.90,
      sale_price: 79.92,
      stars: 0,
      qtd_parcelas: 3,
      img_url: './img/products/shoe2.png',
      zoom_img_url: './img/products/shoe2_zoom.png'
    },
    {
      id: 3,
      name: 'Tênis Ferracini Week',
      price: 229.90,
      sale_price: 183.92,
      stars: 0,
      qtd_parcelas: 9,
      img_url: './img/products/shoe3.png',
      zoom_img_url: './img/products/shoe3_zoom.png'
    },
    {
      id: 4,
      name: 'Tenis Democrata Fan',
      price: 219.90,
      sale_price: 159.92,
      stars: 0,
      qtd_parcelas: 7,
      img_url: './img/products/shoe4.png',
      zoom_img_url: './img/products/shoe4_zoom.png'
    }
  ];


  // Create main object and add it to DOM
  var ProductCarousel = {};

  window.ProductCarousel = ProductCarousel;


  /**
   *  Format number to currency.
   *
   *  @param {Number} number - Number to be formatted
   *
   *  @returns {String} - Formated string.
   *
   *  @private
   */
  function numberToCurrency(number) {
    return 'R$' + number.toFixed(2).toString().replace('.', ',');
  }


  /**
   *  Show modal with "zoomed image".
   *
   *  @param {String} url - URL of desired image.
   *
   *  @private
   */
  function showZoomModal(url) {
    $('#zoom-modal').modal().find('.zoom-img').attr('src', url);
  }


  /**
   *  Add a product to the carousel.
   *
   *  @param {Object} product - Product to be added.
   */
  ProductCarousel.addProduct = function(product) {

    var
      // Create new element from template
      template = ProductCarousel.productTemplate.cloneNode(true).children[0],

      // Define special cases for the filling funciton
      specialCases = {
        img_url: function(url) {
          this.src = url;
          return false;
        },
        stars: function(stars) {
          return false;
        },
        price: function(price) {
          if (product.sale_price) {
            template.querySelector('[data-fill=old_price]').innerHTML = numberToCurrency( price );
            template.querySelector('[data-fill=discount]').innerHTML = numberToCurrency( price - product.sale_price );
            this.innerHTML = numberToCurrency( product.sale_price );

          } else {
            template.querySelector('.old-price').style.display = 'none';
            template.querySelector('.discount').style.visibility = 'hidden';
            this.innerHTML = numberToCurrency( price );
          }

          return false;
        },
        qtd_parcelas: function(qtd) {
          template.querySelector('[data-fill=valor_parcela]').innerHTML = numberToCurrency( (product.sale_price || product.price) / qtd );
        }
      };

    // Iterate over elements filling them with data
    Array.prototype.forEach.call(
      template.querySelectorAll('[data-fill]'),
      function(el) {
        var key = el.getAttribute('data-fill');

        if (
          // Check if a special case is declared and call its function.
          typeof specialCases[key] == 'function' &&
          // If it is called and explicitly returns false, exit iteration.
          specialCases[key].call( el, product[key] ) === false

        ) return;

        // If other conditions aren't met and data exists, change innerHTML.
        if (typeof product[key] !== 'undefined') el.innerHTML = product[key];
      }
    );

    // Add listener for zoom feature
    template.querySelector('.product-img').addEventListener('click', function() {
      showZoomModal(product.zoom_img_url);
    });

    // Append new element to carousel
    ProductCarousel.elem.appendChild(template);
  };


  /**
   *  Initialize the carousel
   *
   *  @param {HTMLElement} elem - Element that will hold the carousel.
   */
  ProductCarousel.init = function(elem) {

    // Sets main elements for internal use
    ProductCarousel.elem = elem;
    ProductCarousel.productTemplate = document.querySelector('[data-template=product]');

    // Populate the carousel
    products.forEach(ProductCarousel.addProduct);

    // Call the plugin
    $(elem).owlCarousel({
      mouseDrag: false,
      loop: true,
      nav: true,
      navText: [
        '<img src="./img/icons/seta_esquerda.png" alt="Anterior">',
        '<img src="./img/icons/seta_direita.png" alt="Próximo">'
      ],
      dots: false,
      responsive: {
        0:{
          items: 1
        },
        576: {
          items: 2
        },
        768:{
          items: 3
        },
        992:{
          items: 4
        }
      }
    });
  };

}());


// Init carousel on document ready
$(function() {
  ProductCarousel.init( document.getElementById('products-carousel') );

  document.getElementsByClassName('search-form')[0].addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
  });
});
