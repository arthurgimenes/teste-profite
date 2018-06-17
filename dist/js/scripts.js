$(document).ready(function () {
    $.getJSON("../database.json", function(data) {
        products = data.products;
        
        for (i = 0; i < products.length; i++) {
            exit = "";
            exit += '<div class="product-item"><figure><a href="#">'
            exit += '<img src="' + products[i].picture + '" alt="' + products[i].title + '">'
            exit += '<figcaption class="product-title">' + products[i].title + '</figure></a>'
            exit += '</figure><span class="product-stars"><img src="img/icon-star-full.png" alt=""><img src="img/icon-star-empty.png" alt=""><img src="img/icon-star-empty.png" alt=""><img src="img/icon-star-empty.png" alt=""><img src="img/icon-star-empty.png" alt=""></span>'
            exit += '<span class="product-price-promo">de R$ ' + products[i].de + '</span>'
            exit += '<span class="product-price">por R$ ' + products[i].por + '</span><span class="product-parcel">'
            exit += '' + products[i].parcel + '</span><a href="#" class="product-action"><img src="img/icon-cart-plus.png" alt="">Comprar</a></div>';
            $('.products').append(exit);
        }
        
        $(".products").owlCarousel({
            loop:true,
            margin:5,
            nav:true,
            dots:true,
            responsive:{
                0:{
                    items:2,
                    nav: false
                },
                426:{
                    items:3,
                    nav: false
                },
                1000:{
                    items:4
                }
            },
            autoWidth: false
        });
    });
    $(".banners").owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        items:1
    });
});