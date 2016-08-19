$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:false,
        item:1,
        slideMargin:0,
        loop:true,
        controls: false
    });
    $('.highlightInner').lightSlider({
        item:3,
        loop:false,
        slideMove:2,
        slideMargin: 9,
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                }
            }
        ]
    });
});