var jsonModule=function(a,b){function c(a){var b=new XMLHttpRequest;b.overrideMimeType("application/json"),b.open("GET","https://api.myjson.com/bins/234w0",!0),b.onreadystatechange=function(){4==b.readyState&&"200"==b.status&&a(b.responseText)},b.send(null)}return{loadJSON:c}}(window,document),lightboxModule=function(a,b){function c(a){b.getElementById("whiteContent").innerHTML=a,b.getElementById("whiteContent").style.display="block",b.getElementById("blackOverlay").style.display="block",b.getElementById("closeLightbox").onclick=function(){lightboxModule.closeLightbox()}}function d(){b.getElementById("whiteContent").style.display="none",b.getElementById("blackOverlay").style.display="none"}function e(a){for(var c=a.length-1;c>=0;--c)b.getElementById(a[c].id).onclick=function(){var a=this.id,b="";b+='<div id="closeLightbox"></div>',jsonModule.loadJSON(function(c){var d=JSON.parse(c),e=d.products[a-1];b+='<img src="../static/images/'+e.zoomimage+'">',lightboxModule.callLightbox(b)})}}return{callLightbox:c,closeLightbox:d,bindLightbox:e}}(window,document),productModule=function(a,b){function c(a){var c;jsonModule.loadJSON(function(d){for(var e=JSON.parse(d),f=e.products.length-4;f>=0;--f){var g=b.createElement("input");1===e.products[f].id&&g.setAttribute("checked","checked"),g.setAttribute("type","radio"),g.setAttribute("name","bslides"),g.setAttribute("id","bslides_"+e.products[f].id);var h=b.getElementById("slider2");h.insertBefore(g,h.childNodes[0])}for(var f=0;f<e.products.length;f++){if(f<e.products.length-3){var i=b.createElement("label");i.setAttribute("for","bslides_"+e.products[f].id),b.getElementById("productSliderArrows").appendChild(i)}var j=b.createElement("li");j.id=e.products[f].id,j.className="prod",j.innerHTML='<img class="product-image" src="../static/images/'+e.products[f].image+'"><img class="product-image-hover" src="../static/images/'+e.products[f].hoverimage+'"><p class="product-title"><span>'+e.products[f].name+'</span></p><span class="product-stars"></span><p class="product-previous-price">De: R$'+e.products[f].previousprice+'</p><p class="product-price">Por: R$'+e.products[f].price+'</p><p class="product-price-times">ou <span>até '+e.products[f].times+"X</span> de <span>R$ "+e.products[f].subprice+'</span></p><a class="product-buy">Comprar</a><span class="product-save">Economize: R$ '+e.products[f].save+"</span>",b.getElementById("products-list").appendChild(j)}var k=b.createElement("label");k.setAttribute("for","bslides_"+e.products[0].id),k.setAttribute("class","goto-first");var l=b.createElement("label");l.setAttribute("for","bslides_"+e.products[e.products.length-4].id),l.setAttribute("class","goto-last"),b.getElementById("productSliderArrows").appendChild(k),b.getElementById("productSliderArrows").appendChild(l);for(var m=b.querySelectorAll(".product-previous-price"),f=0;f<m.length;f++)m[f].innerHTML.length<7&&(m[f].style.opacity=0);c=b.querySelectorAll(".prod"),"function"==typeof a&&a(c)})}return{createProd:c}}(window,document);document.addEventListener("DOMContentLoaded",function(){productModule.createProd(lightboxModule.bindLightbox)}),window.onresize=window.onload=function(){var a=document.querySelectorAll(".banner-image");if(window.innerWidth<1e3)for(i=0;i<a.length;++i)a[i].src=a[i].getAttribute("data-src-mobile");else for(i=0;i<a.length;++i)a[i].src=a[i].getAttribute("data-src")};