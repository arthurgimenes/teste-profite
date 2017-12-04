var modal = (function(){
    var modal = document.getElementById("modal");
    var modalBody = document.getElementById("modal-body");
    var modalImg = document.querySelector('#modal-body div > img');

    //Abre modal
    function openModal(img){

        mudaImg(img);
        //"Mostra" o modal
        modal.style.display = 'block';

        //Animação (transition)
        window.setTimeout(function(){
            //Torna visível
            modal.style.opacity = 1;
        }, 50);

    }
    
    function mudaImg(img){
        //Verifica imagem clicada
        var image = img.getAttribute("src");
        //Pega imagem de maior
        image = image.replace('hover', 'zoom');
        //Troca a imagem do modal
        modalImg.setAttribute("src", image);
    }

    //Fecha modal
    function closeModal(){
        //Torna invisível
        modal.style.opacity = 0;

        window.setTimeout(function(){
            //Esconde modal em 0,3seg
            modal.style.display = 'none';
        },300);
    }

    return{
        openModal: openModal,
        closeModal: closeModal
    }

})();