//var 
main = {
    init:function(){
        main.call_slider();
        
    },

    call_slider: function(){
        $('.slider.banner').slick({
            dots: true,
            responsive:[
                {
                    breakpoint: 991,
                    settings:{
                        arrows:false
                    }
                }
            ]
        });
        $('.prateleira.slider').slick({
            dots: true,
            arrows:true,
            slidesToShow: 4,
            responsive:[
                {
                    breakpoint: 991,
                    settings:{
                        arrows:false,
                        slidesToShow: 2
                    }
                }
            ]
        });
    }
    
};
$(document).ready(function(){
    main.init();
});