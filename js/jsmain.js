$(document).ready (function(){
	$.getJSON('http://localhost:3000/produtos', function (data){
  	$('.sliderwrapper .slider').glide({
      autoplay: 7000,
      animationDuration: 3000,
      arrows: true,
    });

    $('.produtoswrapper .slider').glide({
      autoplay: false,
      animationDuration: 700,
      arrows: true,
      navigation: false,
    });

		$.each(data, function(i, item) { 
			
			var parcela = item.precoAtual /3;

  		$('.slide').append(
		    '<div class="item">' + 
      	'<img src='+ item.imagem + ' width="100" height="99" alt="sliderimg"> ' +
      	'<h3>' + item.nome + '</h3>' + 
        '<div id="rating">' +
        '<img src="images/s' + item.rating + '.png">' +
        '</div>' +
      	'<div id="rating"></div>' +
      	'<div id="precoantigo">' +
      	'<p>de  ' + item.precoAntigo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '</p>' +
        '</div>' + 
        '<div id="precoatual">' + 
         '<p>por  ' + item.precoAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '</p>' + 
        '</div>' + 
        '<div id="parcela">' + 
        '<p>ou em 3x de  ' + parcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })+ '</p>' + 
        '</div>' +
        '<div class="comprar">' + 
        '<a href="#" class="buttonComprar"><img src="images/addcart.png"><p>Comprar</p></a>' + 
        '<div id="off">' + (item.off == true ? '<div id="off">' : '<img src="images/off.png">' ) + 
        '</div>' +
        '</div>' 
      );

	});

      

  });

});