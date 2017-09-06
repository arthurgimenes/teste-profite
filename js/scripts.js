/**
* Fazendo o slideshow
*/


var slides = document.querySelectorAll('#banner .container div');
var atual = 0;
var maxslides = slides.length - 1;
function avancaSlide(){
	
	if(atual < maxslides){
		
		slides[atual].className = ' ';
		slides[atual + 1].className = 'showing';
		atual++;	
		console.log( atual+'/'+maxslides);
		
	} else{
		slides[atual].className = ' ';
		slides[0].className = 'showing';
		atual = 0;
		console.log( atual+'/'+maxslides);
	}
}

function recuaSlide(){
	if(atual > 1){
		
		slides[atual].className = ' ';
		slides[atual - 1].className = 'showing';
		atual--;	
		console.log( atual+'/'+maxslides);
		
	} else{
		slides[atual].className = ' ';
		slides[maxslides].className = 'showing';
		atual = maxslides;
		console.log( atual+'/'+maxslides);
	}
}

/**
* Zoom Produto
*/

function produtoZoomIn(img) {
	var overlay = document.querySelector("#zoom .overlay");
	overlay.style.display = "inline-block";
	overlay.style.height = document.body.offsetHeight;
	
	//pegando o data target
	var imgZoom = img.dataset.target;
	var foto = document.querySelector('#zoom .foto');
	foto.innerHTML = '<div id="close" onclick="produtoZoomOut()"></div><img src="img/produtos/'+imgZoom+'" />';
	var posX = (window.innerHeight - foto.offsetHeight) / 2;
	var posY = (window.innerWidth - foto.offsetWidth) / 2;
	
	foto.style.top = posX + 'px';
	foto.style.left = posY + 'px';

  
}
function produtoZoomOut(){
	var overlay = document.querySelector("#zoom .overlay");
	overlay.style.display = "none";
}

/*
* Gamb pra forçar uma div ficar com o height da imagem do banner =(
*/
function igualaDiv(){
	//document.querySelector('.produtos-content .item img').onclick = function(){produtoZoomIn( this )};
	var banner = document.querySelector('#banner .container');

	var b = document.querySelector('.showing').clientHeight;
	banner.style.height = b+'px';
	console.log(banner.offsetHeight);
}

/**
* Receita de bolo pra fazer um ajax sem jquery
*/
function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

/**
* Montando html pra cada produto
*/
function templateProduto(produto){
	produto.diferenca = parseFloat(produto.preco_antigo - produto.preco_atual, 10).toFixed(2);
	
	var html =`<div class="produtos-content">
		<div class="item">
			<img src="img/produtos/`+produto.imagem+`" alt="`+produto.titulo+`" data-target="`+produto.imagemzoom+`" onclick="javascript:produtoZoomIn(this)"/>
			<h2>`+produto.titulo+`</h2>
			<img src="img/icons/estrelas.png" alt="Classificação do produto" class="estrelas"/>
			<div class="preco">
				<p class="preco-antigo">De: R$`+produto.preco_antigo+`</p>
				<p class="preco-atual">Por: <strong>R$`+produto.preco_atual+`</strong></p>
				<p>ou <strong>Até `+produto.qt_parcela+`x</strong> de <strong>R$ `+produto.valor_parcela+`</strong></p>
			</div>
			<button class="comprar">Comprar</button>
			<span class="economize">Economize: R$`+produto.diferenca +`</span>
		</div>
	</div>`;

	var div = document.querySelector('#produtos .container .produtos-slider');
	div.innerHTML += html;
}

function init(){
	var param = {
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        800:{
	        	items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	}
	/*
	* Lendo o json e interando pra montar o template
	*/
	var xpto = loadJSON('js/produtos.json',
	        function(data) {
	        	//sucesso
	        	for (index = 0; index < data.products.length; ++index) {
				    templateProduto(data.products[index]);
				}
	        },
	        function(xhr) { console.error(xhr); }
	);
	
	igualaDiv();

document.querySelector("#banner .next").onclick = function() {avancaSlide()};
document.querySelector("#banner .prev").onclick = function() {recuaSlide()};


}




window.onload = init;