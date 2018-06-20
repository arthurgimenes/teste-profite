//Gera itens do carrossel
function seedCarrossel(arr){
    var carrossel = document.querySelector('.carrosselnw');
    var produtosJson = JSON.stringify(arr);
    var produtos = JSON.parse(produtosJson);
    var carrosselHtml = '';
    var economia;

    //Constrói itens
    for(var i=0; i<produtos.length; i++){
        carrosselHtml += '<div class="col lg-6 md-6 sm-8 xs-8 content">';
        carrosselHtml += '<div class="thumbnail"><a>';
        carrosselHtml += '<img onclick="modal.openModal(this);" src="'+produtos[i].img+'" alt="'
                       +produtos[i].nome+'" data-toggle="modal" data-target="#tenis"/>';
        carrosselHtml += '<div class="caption">';
        carrosselHtml += '<p class="produto-nome">'+produtos[i].nome+'</p>';
        carrosselHtml += '<img src="./public/img/sapatos/estrelas.png"/><br />';
        carrosselHtml += '<p class="preco-original"';
        if(produtos[i].precoOriginal == produtos[i].precoPromocao){
          carrosselHtml += 'style="opacity:0">'
        }
        carrosselHtml += '<i>De: R$ <span>'+produtos[i].precoOriginal.toString().replace(".", ",")+'</span></i>';
        carrosselHtml += '</p><p class="preco-desconto"><b>Por: <i>R$ <span>'
                         +produtos[i].precoPromocao.toString().replace(".", ",")+'</span></i></b></p>';
        carrosselHtml += '<p class="preco-parcelado"><i>ou <b>até 3X</b> de <b>R$ '
                         +(produtos[i].precoPromocao/3).toFixed(2).toString().replace(".", ",")+'</b></i></p>';
        carrosselHtml += '<button class="comprarBtn"><img src="./public/img/sapatos/carrinho.png" alt="icone carrinho">COMPRAR</button><br />';
        carrosselHtml += '<span class="preco-economia">Economize: R$ '
        economia = produtos[i].precoOriginal - produtos[i].precoPromocao;
        if(economia !== 0){
          carrosselHtml += economia.toFixed(2).toString().replace(".", ",");
        }else{
          carrosselHtml += '00,00'
        }
        carrosselHtml += '</span></div></a></div></div>';
    }
    
    //Adiciona itens a html
    carrossel.innerHTML = carrosselHtml;
}