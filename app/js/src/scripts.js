var jsonModule = (function(window, document) {

    function loadJSON(callback) {
        var xobj = new XMLHttpRequest();

        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'https://api.myjson.com/bins/234w0', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    return {
        loadJSON : loadJSON
    }

}(window, document));

var lightboxModule = (function(window, document) {

    function callLightbox(output){
        document.getElementById('whiteContent').innerHTML=output;
        document.getElementById('whiteContent').style.display='block';
        document.getElementById('blackOverlay').style.display='block';
        document.getElementById('closeLightbox').onclick = function () {
            lightboxModule.closeLightbox();
        };
    }

    function closeLightbox(){
      	document.getElementById('whiteContent').style.display='none';
      	document.getElementById('blackOverlay').style.display='none';
    }

    function bindLightbox(produtos){
     		for (var i = produtos.length - 1;  i >= 0;  --i) {
     			  document.getElementById(produtos[i].id).onclick = function () {
         				var myid = this.id;
         				var newContent = "";

         				newContent+='<div id="closeLightbox"></div>';
         				jsonModule.loadJSON(function(response) {
           					var actual_JSON = JSON.parse(response);
           					var actual_Potion = actual_JSON.products[myid - 1];
           					newContent+='<img src="../static/images/' + actual_Potion.zoomimage + '">';
           					lightboxModule.callLightbox(newContent);
         				});
     			};
     		}
    }

     return {
         callLightbox : callLightbox,
         closeLightbox: closeLightbox,
         bindLightbox: bindLightbox
     }

}(window, document));

var productModule = (function(window, document) {

    function createProd(callback){
        var produtos;

      	jsonModule.loadJSON(function(response) {
        		var actual_JSON = JSON.parse(response);

            for (var i = actual_JSON.products.length - 1;  i >= 0;  --i) {
          			var newElement = document.createElement('li');

          			newElement.id = actual_JSON.products[i].id;
          			newElement.className = "prod";
          			newElement.innerHTML =
                '<img class="product-image" src="../static/images/' + actual_JSON.products[i].image + '" data-src-hover="../static/images/' + actual_JSON.products[i].hoverimage + '">' +
                '<img class="product-image-hover" src="../static/images/' + actual_JSON.products[i].hoverimage + '">' +
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
    }

    return {
        createProd: createProd
    }

}(window, document));
