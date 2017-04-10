(function() {
    'use strict';


    // initialization code
    $(document).ready(function() {
    	var bullets = $('#banner .bullets');
    	var linksBanner = bullets.find('a');
    	var slides = $('#banner .content').find('.slide');
    	var btnNext = $('#banner .btn-next');
    	var btnPrev = $('#banner .btn-prev');


    	linksBanner.on( "click", function() {
			  var numberSlide = $(this).attr('rel');
			  var slide = $('.slide[rel='+numberSlide+']');
				slides.removeClass('slide-active').hide();
				linksBanner.removeClass('active');
				$(this).addClass('active');
				slide.show().addClass('slide-active');
    		return false
			});

			linksBanner[0].click();

			btnNext.on( "click", function() {
				var current = $('.slide-active').attr('rel');
				current = Number(current)+1;
				var bulletsClick = bullets.find('a[rel='+current+']');
				bulletsClick.click();
    		return false
			});

			btnPrev.on( "click", function() {
				var current = $('.slide-active').attr('rel');
				current = Number(current)-1;
				var bulletsClick = bullets.find('a[rel='+current+']');
				bulletsClick.click();
    		return false
			});

    });
})();