window.onload = function(){
    $('.heroCarrousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true
    });
    
    var request = new XMLHttpRequest();
    request.open('GET', '/produtos.json', true)
    request.onload = function() {
    
        var dados = JSON.parse(this.response);
        console.log(dados)
        dados.forEach(produto => {
            if(produto.productHighlight === ""){
                $(".shelfCarrousel").append('<div class="product"> <img src="'+produto.productImage+'"/> <h2 class="nameProduct">'+produto.productName+'</h2> <p class="listPrice">de R$ '+produto.productListPrice+'</p><p class="sellPrice">por R$ '+produto.productSellPrice+'</p><p class="installments">ou em '+produto.productIntallments+'</p><div class="btn"> <a href="'+produto.productLink+'">COMPRAR</a> </div></div>');
            }
            else{
                $(".shelfCarrousel").append('<div class="product"><div class="highlight"><span>'+produto.productHighlight+'</span></div><img src="'+produto.productImage+'"/> <h2 class="nameProduct">'+produto.productName+'</h2> <p class="listPrice">de R$ '+produto.productListPrice+'</p><p class="sellPrice">por R$ '+produto.productSellPrice+'</p><p class="installments">ou em '+produto.productIntallments+'</p><div class="btn"> <a href="'+produto.productLink+'">COMPRAR</a> </div></div>')
            }
        }); 
        $('.shelfCarrousel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    }
                }
            ]
          });
    };
    request.send()

}
