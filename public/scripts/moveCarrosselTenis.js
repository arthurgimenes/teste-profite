var carrosselTenis = (function(){
    var carrossel = document.querySelector('.carrosselnw');
    var pos = 0;

    //Mostra itens de acordo com posicionamento atual
    function move(btn){
                
        var value = 0;
        var carrosselTenis = document.querySelector('.carrosselTenis');
        var carrosselWidth = carrosselTenis.offsetWidth;

        //Verifica se deve avançar ou voltar
        if(btn.getAttribute('class').toString() === 'btnCtrlNext'){
            pos++;
            //Se não estiver no limite...
            if(pos !== 4){
                //Se não estiver nos últimos itens de desktop(pos3) 
                //ou últimos de mobile/tablet(innerWidth/carrosselWidth),
                //continua.
                if(pos !== 3 || window.innerWidth < 992){
                    value = Number('-'+pos+'00');
                //Caso contrário, volta ao início do carrossel
                }else{
                    value = 0;
                    pos = 0;
                }
            //Se estiver no limite do carrossel, volta ao início
            }else{
                value = 0;
                pos = 0;
            }
        }else{
            pos--;
            //Se não for o primeiro clique do usuário
            if(pos !== -1){
                value = Number('-'+pos+'00');
            //Caso seja o primeiro clique, mostra últimos itens de acordo com screen size
            }else{
                if(window.innerWidth < 992){
                    value = -300;
                    pos = 3;
                }else{
                    value = -200;
                    pos = 2;
                }
            }
        }

        //Aplica novo positionamento
        carrossel.style.transform = 'translateX('+value+'%)';     
    }

    //Em resize volta a posição 0 (para evitar bugs)
    window.onresize = function(){
        carrossel.style.transform = 'translateX(0)';
    }

    return{
        move: move
    }

})();