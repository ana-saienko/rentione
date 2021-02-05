//$(document).ready(function () {
//    function ibg() {
//        $.each($('.ibg'), function (index, val) {
//            if ($(this).find('img').length > 0) {
//                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
//            }
//        });
//
//    }
//
//    ibg();
//});

$(document).ready(function () {
    $('.pop-off__for').slick({
        slidesToShow: 6,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.pop-off__slider',
        responsive: [
            {
                breakpoint: 467,
                settings: {
                    slidesToShow: 2,
                }
    },
    ]
    });
    $('.pop-off__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.pop-off__for',
        dots: false,
        arrows: true,
        centerMode: false,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-right.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
    },
            {
                breakpoint: 1412,
                settings: {
                    arrows: false,
                }
    },
    ]
    });


    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__top-list').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
    $('ul.header__top-list li span').click(function () {
        $('ul.header__top-list').toggleClass('open-menu');
        $('.menu-burger__header').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});

jQuery(document).ready(function () {

    jQuery(".link_1").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".pop-off").offset().top + 180
        }, 400);
    });

    jQuery(".link_2").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".about").offset().top
        }, 400);
    });

    jQuery(".link_3").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".showreal").offset().top
        }, 400);
    });

    jQuery(".link_4").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".footer").offset().top + 180
        }, 400);
    });

});
