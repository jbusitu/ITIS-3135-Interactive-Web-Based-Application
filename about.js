$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        randomStart: true,
        pause: 3000,
        slideWidth: 500,
        slideMargin: 10,
        captions: true,
        pagerType: 'short',
        pagerSelector: '#id_pager'
    });
});