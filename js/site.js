$('#block-slider-main').slick({
    autoplay: true,
    arrows: false,
    dots: false,
});
$('.block-slider-partner').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});
$(document).ready(function() {
    $('.block-widget-title > ul > li > a').click(function(e) {
        e.preventDefault();
        $('.block-widget-title li').removeClass('active');
        $(this).closest('li').addClass('active');
        var checkElement = $(this).next();
        if (checkElement.is('ul') && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if (checkElement.is('ul') && (!checkElement.is(':visible'))) {
            $('.block-widget-title ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if ($(this).closest('li').find('ul').children().length == 0) {
            return true;
        } else {
            return false;
        }
    });

    $('.block-widget-title ul li').each(function() {
        if ($(this).find('.sub-v-menu').hasClass('sub-v-menu')) {
            $(this).addClass('has-sub');
        }
    });
});

jQuery(document).ready(function($) {
    $('.btn-minus').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('.block-quality').find('.form-control');
        var value = parseInt($input.val());
        if (value > 1) {
            value = value - 1;
        } else {
            value = 1;
        }
        $input.val(value);
    });
    $('.btn-plus').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('.block-quality').find('.form-control');
        var value = parseInt($input.val());
        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }
        $input.val(value);
    });
});

var mzOptions = {
    zoomMode: true,
    onExpandClose: function() { MagicZoom.refresh(); }
};
/*------------------------------------ Single Product */
(function($) {
    $('.slider-thumbnail-navigation').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        vertical: false,
        responsive: [{
                breakpoint: 480,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})(jQuery);