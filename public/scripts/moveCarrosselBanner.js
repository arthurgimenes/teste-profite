var move = (function(){

    //DOM
    var items = document.getElementsByClassName("item");
    var ctrls = document.getElementsByClassName('carousel-control');
    var carrosselBanner = document.getElementById("carousel-block");
    var indicators = document.querySelectorAll(".carousel-indicators button");
    var width;
    var itemsDefault = items.length;
    var indPos;
    var itemPos;

    function widthToMove(){
        width = document.getElementById("carousel-inner").offsetWidth;
    }

    widthToMove();
    window.addEventListener("resize", widthToMove);

    function peloIndicador(indicador){
        //Desabilita interação por 0,5 seg
        desabilitaControles(indicators);
        desabilitaControles(ctrls);

        //Verifica posição de slide solicitado
        indPos = indicador.getAttribute("data-slide-to");

        //Remove indicador preenchido no momento
        for(var i=0; i<indicators.length; i++){
            indicators[i].classList.remove("selected");    
        }

        //Preenche indicador selecionado
        indicators[indPos].className += "selected";

        //Remove slide ativo
        for(var i=0; i<items.length; i++){
            if(items[i].classList.contains("active")){
                animaSlideIndicador(items[i]);
            }
        }

        //Ativa slide selecionado
        items[indPos].className += " active";
    }

    function animaSlideIndicador(item){
        //Verifica posição de slide a ser removido
        itemPos = item.getAttribute("slide");

        //Se slide selecionado não for o mesmo que o atual
        if(itemPos !== indPos){

            //Posiciona carrossel em -"+widthToMove+"px para gerar transição
            carrosselBanner.style.transform = "translate(-"+width+"px)";

            //Se slide a ser removido ficar a direita do item atual
            if(indPos > itemPos){
                slideDireitoInd(item);

            //Se slide a ser removido ficar a esquerda do item atual
            }else{
                slideEsquerdoInd(item);
            }

        }
    }

    function slideDireitoInd(item){
        //Ativa transição (0px para -"+widthToMove+"px)
        carrosselBanner.classList.remove("no-transition");
        
        //Após animação acima completar
        setTimeout(function(){
            //Remove transição para ajuste ser automático
            carrosselBanner.className += " no-transition";
            //Remove slide antigo
            item.classList.remove("active");
            //Ajusta posição de slide novo (-"+widthToMove+"px para 0px)
            carrosselBanner.style.transform = "translate(0)";
        }, 500);

    }
    
    function slideEsquerdoInd(item){
        //Remove transição pra ajustar automaticamente
        carrosselBanner.className += " no-transition";
    
        setTimeout(function(){
            //Ativa transição
            carrosselBanner.classList.remove("no-transition");
            //Ajusta posição de slide novo (-"+widthToMove+"px para 0px)
            carrosselBanner.style.transform = "translate(0)";
        }, 50);
    
        //Ao terminar de animar, remove slide antigo
        setTimeout(function(){
            item.classList.remove("active");
        }, 500);
    }

    function pelaSeta(direction){
        //Verifica lado que deve ir
        var dirSel = direction.getAttribute("direction");

        //Desabilita interações por 0,5 seg
        desabilitaControles(indicators);
        desabilitaControles(ctrls);
        console.log(width);
        carrosselBanner.style.transform = "translate(-"+width+"px)";

        //Chama controle de setas
        controlaSlideSeta(dirSel);
    }

    function controlaSlideSeta(dir){
        //Chama controles por direção
        //Se direção solicitada for slide a direita
        if(dir === 'next'){
            slideDireitoSeta();
            return;
        }

        //Se direção solicitada for slide a esquerda
        slideEsquerdoSeta();
    }

    function slideDireitoSeta(){
        //Insere slide e prepara transição
        insereSlideSeta('2', 1, 0, 'first');

        setTimeout(function(){
            //Desativa transição
            carrosselBanner.className += " no-transition"; 
            //Posiciona em 0px
            carrosselBanner.style.transform = "translate(0px)";
        }, 500);

        //Desativa slide ativo a mais
        removeSlideSeta((items.length-1), (items.length-2), 0, 0);

        //Ativa transição
        carrosselBanner.classList.remove("no-transition");
    }

    function slideEsquerdoSeta(){
        //Prepara transição
        insereSlideSeta('0', -1, (items.length-1), 'last');

        //Desativa transição
        carrosselBanner.className += " no-transition";

        setTimeout(function(){
            //Ativa transição
            carrosselBanner.classList.remove("no-transition");
            //Posiciona em 0px
            carrosselBanner.style.transform = "translate(0px)";
        }, 50);

        //Desativa slide ativo a mais
        removeSlideSeta(0, 0, (items.length-2), 1);
    }

    function insereSlideSeta(limite, num, indSel, pos){
        //Percorre slides
        for(var i=0; i<items.length; i++){
            //Se slide está ativo
            if(items[i].classList.contains("active")){
                //Verifica posição do slide
                itemPos = items[i].getAttribute("slide");
                //Remove indicador preenchido no momento
                for(var j=0; j<indicators.length; j++){
                    indicators[j].classList.remove("selected");    
                }

                /* -------------------- OBS.: --------------------- */
                //Valores antes e após barras nos comentários a seguir 
                //se referem as duas possibilidades: avançar ou voltar 
                //os slides, utilizando as setas de direita e esquerda, 
                //respectivamente.

                //Se não for o útimo/primeiro slide
                if(itemPos !== limite){
                    //Preenche indicador selecionado somando/subtraindo +1/-1
                    indicators[(Number(itemPos)+num)].className += "selected";
                    //Ativa slide que vem em seguida/anterior
                    items[(i+num)].className += " active";
                //Caso esteja no último/primeiro slide, significa que está voltando ao primeiro/último slide
                }else{
                    //Deve portanto preencher o primeiro/último indicador
                    indicators[indSel].className += "selected";
                    //Para preservar visual de transição, cria imagem temporária que logo será excluída
                    criaTempImg(pos);
                }
                break;
            }
        } 
    }

    function removeSlideSeta(slideTemp, slideAtivo, slideAtivar, slideAtivo2){

        /* -------------------- OBS.: --------------------- */
        //Valores antes e após barras nos comentários a seguir 
        //se referem as duas possibilidades: avançar ou voltar 
        //os slides, utilizando as setas de direita e esquerda, 
        //respectivamente.

        //Caso haja um slide a mais no array de items (imagem temporária de criaTempImg())
        if(items.length !== itemsDefault){

            setTimeout(function(){
                //Remove imagem a mais no final/começp
                carrosselBanner.removeChild(items[slideTemp]);
                //Remove último/primeiro slide ativo
                items[slideAtivo].classList.remove("active");
                //Ativa primeiro/último slide
                items[slideAtivar].className += " active";
            }, 500);

        //Caso length de slides esteja normal (sem imagens temporárias)
        }else{
            setTimeout(function(){
                for(var i=0; i<items.length; i++){
                    if(items[i].classList.contains("active")){

                        //Remove primeiro/segundo slide ativo encontrado
                        items[i+slideAtivo2].classList.remove("active");

                        break;
                    }
                }
            }, 500);
        }
    }

    function criaTempImg(img){
        //Cria elemento
        var elem = document.createElement('a');
        //Gera atributos
        elem.setAttribute("href", "#");
        elem.setAttribute("class", "item active");
        //Verifica imagem e alt a ser gerada e append ao carrossel

        if(img == 'first'){
            elem.innerHTML = items[0].querySelector('img').outerHTML;
            carrosselBanner.appendChild(elem);
            return;
        }
        elem.innerHTML = items[items.length-1].querySelector('img').outerHTML;
        carrosselBanner.prepend(elem);
    }


    function desabilitaControles(ctrl){
        //Desabilita controles
        for(var i = 0; i < ctrl.length; i++) {
            ctrl[i].disabled = true;
        }

        //Habilita novamente após término de transição
        setTimeout(function(){
            for(var i = 0; i < ctrl.length; i++) {
                ctrl[i].disabled = false;
            }
        }, 500);

    }

    return{
        peloIndicador: peloIndicador,
        pelaSeta: pelaSeta
    }

})();
// (function(){
//     var seta = document.getElementById('automatico');
//     setInterval(function(){
//         //bota um counter que zera quando função é chamada. talvez com parametro move.pelaseta(seta, user) ou move.pelaseta(seta, auto)) pra determinar quem foi
//         move.pelaSeta(seta);
//     }, 5000);
// }());

    
