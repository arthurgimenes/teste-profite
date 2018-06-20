document.addEventListener('DOMContentLoaded', function() {

	productModule.createProd(lightboxModule.bindLightbox);

});

window.onresize = window.onload = function () {
	var images = document.querySelectorAll(".banner-image");

	if (window.innerWidth < 1000) {
		for (i = 0; i < images.length; ++i) {
			images[i].src = images[i].getAttribute("data-src-mobile");
		}
  }	else {
		for (i = 0; i < images.length; ++i) {
			images[i].src = images[i].getAttribute("data-src");
		}
  }
};
