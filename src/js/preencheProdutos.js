$(document).ready(function(){

    (function(){
        var produtos = 
        [   
            {
                "descricao": "Sandália Ferracini Ecologic",
                "vlAnterior": "",
                "vlAtual": "95,92",
                "qtdParcela": "4",
                "vlParcela": "23,98",
                "imgProduto": "/teste-profite/public/img/sapatos/calçado1.png",
                "imgHover": "/teste-profite/public/img/sapatos/calçado1_hover.png",
                "imgModal": "/teste-profite/public/img/sapatos/calçado1_zoom.png",
                "economize": "43,98"
            },
            {
                "descricao": "Chinelo Kildare",
                "vlAnterior": "99,90",
                "vlAtual": "79,92",
                "qtdParcela": "3",
                "vlParcela": "26,64",
                "imgProduto": "/teste-profite/public/img/sapatos/calçado2.png",
                "imgHover": "/teste-profite/public/img/sapatos/calçado2_hover.png",
                "imgModal": "/teste-profite/public/img/sapatos/calçado2_zoom.png",
                "economize": "19,98"
            },
            {
                "descricao": "Tênis Ferracini Week",
                "vlAnterior": "229,90",
                "vlAtual": "183,92",
                "qtdParcela": "9",
                "vlParcela": "20,43",
                "imgProduto": "/teste-profite/public/img/sapatos/calçado3.png",
                "imgHover": "/teste-profite/public/img/sapatos/calçado3_hover.png",
                "imgModal": "/teste-profite/public/img/sapatos/calçado3_zoom.png",
                "economize": "45,98"

            },
            {
                "descricao": "Tênis Democrata Fan",
                "vlAnterior": "219,90",
                "vlAtual": "159,92",
                "qtdParcela": "3",
                "vlParcela": "22,84",
                "imgProduto": "/teste-profite/public/img/sapatos/calçado4.png",
                "imgHover": "/teste-profite/public/img/sapatos/calçado4_hover.png",
                "imgModal": "/teste-profite/public/img/sapatos/calçado4_zoom.png",
                "economize": "59,98"
            }
        ]
     

        $.each(produtos, function(index, produto){
          var template = $('#templateProduto').clone();
          template.find('.imgProduto')
            .prop('src', produto.imgProduto)
            .data('imgHover', produto.imgHover)
            .data('imgNormal', produto.imgProduto)
            .data('imgModal', produto.imgModal);

           if(produto.vlAnterior){
              template.find('.vlAnterior').html("<strike>R$ " + produto.vlAnterior + "</strike>"); 
           }
           
           template.find('.descProduto').html(produto.descricao);          
           template.find('.vlAtual').html("R$ " + produto.vlAtual);
           template.find('.vlParcela').html(" ou até " + produto.qtdParcela + "x de R$" + produto.vlParcela);         
           template.find('.economize').html("Economize: R$ " + produto.economize);         

          template.prop('id', '');
          $('#divProdutos').append(template);

        });             

    })();
})