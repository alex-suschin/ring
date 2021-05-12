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

    $('.actions-tabs a').click(function() {
        $('.actions-tabs').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.actions-box').find('.actions-elem').hide();
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
                slidesToShow: 1,
                variableWidth: true
            }
        }]
    });

    $('.dealer-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        draggable: false,
        infinite: false,
        asNavFor: '.dealer-slider-thumbs',
        responsive: [{
            breakpoint: 1563,
            settings: {
                vertical: false,
                infinite: true,
                verticalSwiping: false,
                fade: true,
            },
            breakpoint: 641,
            settings: {
                vertical: false,
                infinite: true,
                verticalSwiping: false,
                slidesToShow: 1,
                fade: false,
                variableWidth: true
            }
        }]
    });

    $('.dealer-slider-thumbs').slick({
        slidesToShow: 3,
        slidesPerRow: 1,
        asNavFor: '.dealer-slider-big',
        dots: false,
        swipeToSlide: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        infinite: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1563,
            settings: {
                slidesToShow: 1,
                vertical: false,
                infinite: true,
                verticalSwiping: false,
                variableWidth: true
            }
        }]
    });

    $('.news-middle-sl').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2,
        dots: true,
        swipeToSlide: true,
        arrows: false,
        infinite: false,
        responsive: [{
            breakpoint: 1563,
            settings: {
                rows: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                slidesPerRow: 1,
                variableWidth: true,
                infinite: false
            }
        }]
    });

    $('.more-actions-sl').slick({
        slidesToShow: 3,
        dots: true,
        swipeToSlide: true,
        arrows: false,
        infinite: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
            breakpoint: 641,
            settings: {
                slidesToShow: 1,
            }
        }]
    });



    $('select').niceSelect();

    $(window).on('load', function() {
        let phones = [
            { 'mask': '+7 \\ \\ ###-###-##-##' }
        ];

        $('input[type=tel]').inputmask({
            mask: phones,
            greedy: false,
            definitions: {
                '#': {
                    validator: '[0-9]',
                    cardinality: 1
                }
            }
        });
    });

    // $().fancybox({
    //     selector: '.dealer-slider-big .slick-slide:not(.slick-cloned)',
    //     backFocus: false
    // });


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

    if (width < '821') {


        $('.news-more:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            dots: true,
            swipeToSlide: true,
            arrows: false
        });
    } else {
        $(".news-more.slick-initialized").slick("unslick");
    }

    if (width < '641') {
        $('.slider-news-mobile:not(.slick-initialized)').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            variableWidth: true,
            infinite: false
        });
    } else {
        $(".slider-news-mobile.slick-initialized").slick("unslick");
    }

    if (width < '641') {
        $('div[data-img-mobile').each(function() {
            var bgDesc = $(this).attr('style');
            var bgMob = $(this).attr('data-img-mobile');
            $(this).attr('style', bgMob);
        })
    }

    if (width > '640') {
        $('div[data-img-desc').each(function() {
            var bgDataDesc = $(this).attr('data-img-desc');
            $(this).attr('style', bgDataDesc);
        })
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