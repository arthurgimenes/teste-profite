var productModule = (function(window, document) {

    function createProd(callback){
        var produtos;

      	jsonModule.loadJSON(function(response) {
        		var actual_JSON = JSON.parse(response);
            for (var i = actual_JSON.products.length - 4; i >= 0; --i) {
              var radioInput = document.createElement('input');

              if (actual_JSON.products[i].id === 1) {
                radioInput.setAttribute('checked', 'checked');
              }
              radioInput.setAttribute('type', 'radio');
              radioInput.setAttribute('name', 'bslides');
              radioInput.setAttribute('id', 'bslides_' + actual_JSON.products[i].id);

              var slider = document.getElementById('slider2');
              
              slider.insertBefore(radioInput, slider.childNodes[0]);
            }

            for (var i = 0;  i < actual_JSON.products.length;  i++) {
                if (i < actual_JSON.products.length - 3) {
                  var arrow = document.createElement('label');

                  arrow.setAttribute('for', 'bslides_' + actual_JSON.products[i].id);
                  document.getElementById('productSliderArrows').appendChild(arrow);
                }

          			var newElement = document.createElement('li');

          			newElement.id = actual_JSON.products[i].id;
          			newElement.className = "prod";
          			newElement.innerHTML =
                '<img class="product-image" src="../static/images/' + actual_JSON.products[i].image + '">' +
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

            var firstArrow = document.createElement('label');
            firstArrow.setAttribute('for', 'bslides_' + actual_JSON.products[0].id);
            firstArrow.setAttribute('class', 'goto-first');
            var lastArrow = document.createElement('label');
            lastArrow.setAttribute('for', 'bslides_' + actual_JSON.products[actual_JSON.products.length - 4].id);
            lastArrow.setAttribute('class', 'goto-last');

            document.getElementById('productSliderArrows').appendChild(firstArrow);
            document.getElementById('productSliderArrows').appendChild(lastArrow);

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
