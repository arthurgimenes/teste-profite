var mudaImgFile = (function(){
    
    var items = document.getElementsByClassName('item');
    var imgs = [];
    for(var i=0; i<items.length; i++){
        imgs.push(items[i].childNodes[1]);
    }
    var length = imgs.length;
    
    //Caso usuário não esteja no celular, gera imagem melhor
    if(window.innerWidth > 767){
        mudaImagensCarrossel('not-mobile');
    }
        
    //Caso janela seja alterada, altera imagem
    window.onresize = function() {
        if(window.innerWidth < 767){
          mudaImagensCarrossel('mobile');
          return;
        }
        mudaImagensCarrossel('not-mobile');
    }
        
    //Muda imagem para tamanho mobile ou desktop
    function mudaImagensCarrossel(screenSize){
        //Se screen size for mobile
        if(screenSize === 'mobile'){
            for(var i=0; i<length; i++){
              //Troca por imagens mais leves
              imgs[i].setAttribute('src', './public/img/banner/banner'+(i+1)+'_mobile.jpg');
            }
            return;
        }
        //Se não for mobile
        for(var i=0; i<length; i++){
            //Troca por imagens de maior qualidade
            imgs[i].setAttribute('src', './public/img/banner/banner'+(i+1)+'.jpg');
        }
    }

})();
