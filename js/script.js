var products = [
    {
        photoPath: 'img/sapatos/calcado1_hover.png',
        nomeCalcado: 'Sandália Ferracini Ecologic',
        valor: 'R$ 95,92',
        ou: 'até 4X de R$23.98',
        economia: 'R$ 43, 98'
    },
    {
        photoPath: 'img/sapatos/calcado2_hover.png',
        nomeCalcado: 'Chinelo Kildare',
        valor: 'R$ 79,92',
        ou: 'até 3X de R$26.64',
        valorAnterior: 'De: R$ 99,90',
        economia: 'R$ 19,98'
    },
    {
        photoPath: 'img/sapatos/calcado3_hover.png',
        nomeCalcado: 'Tênis Ferracini Week',
        valor: 'R$ 183,92',
        ou: 'até 9X de R$20.43',
        valorAnterior: 'De: R$ 229,90',
        economia: 'R$ 45,98'
    },
    {
        photoPath: 'img/sapatos/calcado4_hover.png',
        nomeCalcado: 'Tênis Democrata Fan',
        valor: 'R$ 159,92',
        ou: 'até 7X de R$22.84',
        valorAnterior: 'De: R$ 219,90',
        economia: 'R$ 59,98'
    }
]

var banners = [
    'img/banner/normal/banner1.jpg',
    'img/banner/normal/banner2.jpg',
    'img/banner/normal/banner3.jpg',
    'img/banner/normal/banner4.jpg',
    'img/banner/normal/banner5.jpg'
]




$(document).ready(function(){
    var mainContentList = $("#main-content .slider");
    var loadedContent = [];
    jQuery.each(products, function(index){
        if(products[index].valorAnterior == undefined){
            products[index].valorAnterior = '<br>';
        }
        loadedContent.push('<div class="slide"><img src="' + products[index].photoPath + '"><p class="description">' + products[index].nomeCalcado +'</p><br><img src="img/sapatos/estrelas.png"><p class="prev-val">' + products[index].valorAnterior + '</p><p class="actual-val"><strong>Por: <i>' + products[index].valor + '</strong></p><p class="ou actual-val">ou <strong>' + products[index].ou + '</i></strong></p><a href="#"><img src="img/sapatos/comprarbtn.png" class="comprarbtn"></a><div class="btn-like">Economize ' + products[index].economia + '</div></div>');
    });
    mainContentList.html(loadedContent);

    var bannersSlide = $("#banners .slider");
    var loadedBannerContent = [];
    jQuery.each(banners, function(index){
        console.log(banners[index]);
        loadedBannerContent.push('<div class="slide"><img class="img-full" src="' + banners[index] + '"></div>');
    });
    console.log(loadedBannerContent);
    console.log(banners);
    bannersSlide.html(loadedBannerContent);

    $('#main-content .slider').bxSlider({
        slideWidth: 260,
        minSlides: 3,
        maxSlides: 4,
        slideMargin: 10,
        moveSlides: 1,
    });

    $('#banners .slider').bxSlider({
        minSlides: 3,
        maxSlides: 4,
        slideMargin: 10,
        moveSlides: 1,
        
    });

    var screenHeight = screen.height;
    if (screenHeight < 800) {
    $('body').css('zoom', 0.8);
    } else {
        $('body').css('zoom', 1);
    }

    $(".search-box").on('focus',function(){
        $(this).val("");
    });

    // var modal = $("#myModal");
    // var span = $(".close")[0];
    // modal.hide();
    
    // $(".slide").on('click', function(){
    //     var imagem = $(this).children('img')[0];
    //     modal.show();
    //     modal.htm(imagem);
    // });
});


// var mainJumbo = document.getElementsByClassName('jumbotron-main')[0];
// var lead = mainJumbo.getElementsByClassName('container')[1].getElementsByClassName('lead')[0];
// lead.innerHTML = professional.profile;