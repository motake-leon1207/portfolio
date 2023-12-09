
$(function () {

    // ハンバーガーメニュー
    $('.hamburger').on('click', function () {
        $('.sp-nav').fadeToggle();
        $('.hamburger').toggleClass('open');
    });


    // スライダー
    $('.slider').slick({
        dots: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        // arrows: false,
        arrows: true
    });



});


