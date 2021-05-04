$(function() {

    AOS.init({
        easing: 'cubic-bezier(0.75, 0.02, 0.5, 1);',
        once: true,
        disable: 'mobile'
    });

    $("a.anchor-up").click(function() {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });

    $('#hamburger-icon').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mobile-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.mobile-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });

    // $('#hamburger-icon-footer').click(function() {
    //     var footHeight = $(".footer-top");
    //     $("html, body").animate({
    //         scrollTop: footHeight.outerHeight() + footHeight.offset().top - 81
    //     }, "slow");
    //     $(this).toggleClass('active');
    //     if ($(this).hasClass('active')) {
    //         $('.mobile-menu-footer').addClass('active');
    //         $('html').addClass('ov-hidden');
    //     } else {
    //         $('.mobile-menu-footer').removeClass('active');
    //         $('html').removeClass('ov-hidden');
    //     }
    // });

    $('.style-tab').click(function() {
        $('.style-tabs').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.styles-elems').find('.styles-elem-item').hide();
        $('#' + $(this).data('switch')).show();
    });

    $('.top-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false
            }
        }]
    });



    $('.news-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.prev-btn'),
        nextArrow: $('.next-btn'),
        responsive: [{
            breakpoint: 701,
            settings: {
                arrows: false,
                slidesToShow: 2,
                variableWidth: true
            }
        }]
    });

    $('select').niceSelect();

});





var flag = false;

size();

$(window).resize(function() {
    if (flag == false) {
        size();
    }
});

function size() {
    if ($(window).width() < '992') {

        $('.menu .sub').each(function() {
            $(this).children('a').after(`<i><svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L4 4L1 1" />
            </svg></i>`);
        });

        // $('.sub i').click(function() {
        //     $(this).siblings('.sub-menu').slideToggle();
        // });

        $('.sub i').click(function() {
            $(this).parents('.sub').siblings('.sub').removeClass('active');
            $('.sub-menu').slideUp();
            if ($(this).parents('.sub').hasClass('active')) {
                $(this).parents('.sub').removeClass('active');
                $(this).siblings('.sub-menu').slideUp();
            } else {
                $(this).parents('.sub').addClass('active');
                $(this).siblings('.sub-menu').slideToggle();
            }
        });

        flag = true;
    }
}

$(window).on('load resize', function() {

    var width = $(window).width();

    if (width > '991') {
        $('.mobile-menu .menu').appendTo($('.header-left'));
        $('.mobile-menu-footer .menu').appendTo($('.footer-left'));

        $('.menu .sub').each(function() {
            $(this).children('i').remove();
        });
    }

    if (width < '992') {
        $('.header .menu').prependTo($('.mobile-menu'));
        $('.footer-left .menu').prependTo($('.mobile-menu-footer'));
    }

    // if (width > '640') {


    //     $('.actions-slider:not(.slick-initialized)').slick({
    //         infinite: true,
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         variableWidth: true,
    //         dots: true,
    //         arrows: false
    //     });
    // } else {
    //     $(".actions-slider.slick-initialized").slick("unslick");
    // }

});