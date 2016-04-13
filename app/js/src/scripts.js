function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://api.myjson.com/bins/3nkdc', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }

 function callLightbox(output){
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

function createProd(callback){
  var produtos;
	//CRIA AS DIVS DOS PRODUTOS DINAMICAMENTE
	loadJSON(function(response) {

		var actual_JSON = JSON.parse(response);
    console.log(actual_JSON);
		for (var i in actual_JSON.products){
			var newElement = document.createElement('li');
			newElement.id = actual_JSON.products[i].id;
			newElement.className = "prod";
			newElement.innerHTML =
			'<img src="images/' + actual_JSON.products[i].image + '">';

			document.getElementById("products-list").appendChild(newElement);
		}
		produtos = document.querySelectorAll(".prod");
		 if (typeof callback === "function") {
			callback(produtos);
		}
	});
	//fim json


}

function bindLightbox(produtos){

		for (var i = produtos.length - 1;  i >= 0;  --i) {
			document.getElementById(produtos[i].id).onclick = function () {
				var myid = this.id;
				var newContent = "";

				newContent+='<div id="close_lightbox">X</div>';

				loadJSON(function(response) {
					var actual_JSON = JSON.parse(response);
					var actual_Potion = actual_JSON.potions[myid];
					var actual_Ing = actual_JSON.potions[myid].ingredients;

					newContent+='<img src="images/' + actual_Potion.image + '">';
					newContent+='<div class="description">';
					newContent+='<p class="feature_titles">'+ actual_Potion.name + '</p>';
					newContent+='<p class="feature_titles">Use/Effect:</p>';
					newContent+='<p class="feature_desc">'+ actual_Potion.effect + '</p>';
					newContent+='<p class="feature_titles">Ingredients:</p>';
					newContent+='<ul>';

					for (var j in actual_Ing){
						newContent+='<li>'+ actual_Ing[j] + '</li>';
					}

					newContent+='</ul><br/>';
					newContent+='<p class="feature_titles nomargin_padding">Price:</p>';
					newContent+='<p class="feature_desc price_value">$'+ actual_Potion.price + '</p>';
					newContent+='</div>';
					newContent+='<div class="add_cart">ADD TO CART</div>'
					//ABRE A LIGHTBOX
					callLightbox(newContent);
					});


			};
		}
}
