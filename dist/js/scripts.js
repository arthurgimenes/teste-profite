$(document).ready(function () {
    /**********************************
    * owlCarousel
    *********************************/
    var options = {
        items:1,
        center:true,
        freeDrag: true,
        autoWidth: true,
        navigation: true,
        navigationText : true,
        autoWidth:true,
        loop: true,
        animateIn: true
        /*
        pagination: false,
        mouseDrag:true,*/
    };
    $("#owl-case").owlCarousel(options);

});
