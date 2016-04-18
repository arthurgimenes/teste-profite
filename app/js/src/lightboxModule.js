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
