function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://api.myjson.com/bins/2a0hw', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }

 function callLightbox(output){
   console.log('callLightbox');
	document.getElementById('white_content').innerHTML=output;
	document.getElementById('white_content').style.display='block';
	document.getElementById('black_overlay').style.display='block';
	document.getElementById('close_lightbox').onclick = function () {
		 closeLightbox();
	 };
}

function closeLightbox(){

	document.getElementById('white_content').style.display='none';
	document.getElementById('black_overlay').style.display='none';
}

function bindLightbox(produtos){
    console.log('bindLightbox');
		for (var i = produtos.length - 1;  i >= 0;  --i) {
			document.getElementById(produtos[i].id).onclick = function () {
				var myid = this.id;
				var newContent = "";

				newContent+='<div id="close_lightbox">X</div>';

				loadJSON(function(response) {
					var actual_JSON = JSON.parse(response);
					var actual_Potion = actual_JSON.products[myid];

					newContent+='<img src="images/' + actual_Potion.zoomimage + '">';

					//ABRE A LIGHTBOX
					callLightbox(newContent);
					});


			};
		}
}

function createProd(callback){
  var produtos;
	//CRIA AS DIVS DOS PRODUTOS DINAMICAMENTE
	loadJSON(function(response) {

		var actual_JSON = JSON.parse(response);

		for (var i in actual_JSON.products){
			var newElement = document.createElement('li');
			newElement.id = actual_JSON.products[i].id;
			newElement.className = "prod";
			newElement.innerHTML =
			// '<img src="images/' + actual_JSON.products[i].image + '">';
      '<img class="product-image" src="../static/images/' + actual_JSON.products[i].image + '" data-src-hover="../static/images/' + actual_JSON.products[i].hoverimage + '">' +
      '<p class="product-title"><span>' + actual_JSON.products[i].name + '</span></p>' +
      '<span class="product-stars"></span>' +
      '<p class="product-previous-price">De: R$' + actual_JSON.products[i].previousprice +'</p>' +
      '<p class="product-price">Por: R$' + actual_JSON.products[i].price + '</p>' +
      '<p class="product-price-times">ou <span>até ' + actual_JSON.products[i].times + 'X</span> de <span>R$ ' + actual_JSON.products[i].subprice + '</span></p>' +
      '<a class="product-buy">Comprar</a>' +
      '<span class="product-save">Economize: R$ ' + actual_JSON.products[i].save + '</span>';

			document.getElementById("products-list").appendChild(newElement);
		}
		produtos = document.querySelectorAll(".prod");
		 if (typeof callback === "function") {
			callback(produtos);
		}
	});
	//fim json


}
