$(document).ready(function(){
	// hover na imagem do produto
	(function(){
		$('.produto').mouseover(function(){			
			var img = $(this).find('.imgProduto');
			img.prop('src', img.data('imgHover'));
		});

		$('.produto').mouseout(function(){			
			var img = $(this).find('.imgProduto');
			img.prop('src', img.data('imgNormal'));
		});
	})();


	// modal para visualização da imagem ampliada
	(function(){		
		var modal = $('#myModal');		
		var img = $('.imgProduto');
		var modalImg = $('#imgModal');
		
		img.click(function(){			
			modal.css('display', 'block');
			modalImg.prop('src', $(this).data('imgModal'));			    
		});

		var span = $('.close');

		span.click(function(){
			modal.css('display', 'none');
		});

	})();

	// criar slider do banner
	$('#divBanner').bxSlider();	

	// imagem do banner muda a cada 3 segundos
	(function(){
		setInterval(function(){ $('.bx-next').click(); }, 3000);
	})();

});
