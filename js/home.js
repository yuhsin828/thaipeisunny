// const topNav = $('#topNav').offset().top;

$(document).ready(function () {
    fixedNav(); /* nav固定在上方 */
    scrollDown(); /* 往下滑 */
});

function fixedNav() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > topNav) {  /* 滑動到nav的距離 */
            $('.navbar-brand').removeClass('d-none');
            $('.navbar').addClass('nav_top bg_white shadow-sm');
            $('.nav-link').removeClass('nav_btn');
            $('#navList').removeClass('mx-auto nav_list_bg');
            $('#navList').addClass('ms-auto');
            $('nav .text_dark').hover(function () {
                $(this).css('color', '#e36600');
            }, function () {
                $(this).css('color', '#333333');
            });
        } else {
            $('.navbar-brand').addClass('d-none');
            $('.navbar').removeClass('nav_top bg_white shadow-sm');
            $('.nav-link').addClass('nav_btn');
            $('#navList').addClass('mx-auto nav_list_bg');
            $('#navList').removeClass('ms-auto');
            $('nav .text_dark').hover(function () {
                $(this).css('color', '');
            }, function () {
                $(this).css('color', '');
            });
        }
    });
}

function scrollDown() {
    $('#scrollDown').click(function () {
        const topSec = $('#section1').offset().top - $('.navbar').innerHeight();
        $('html,body').animate({ scrollTop: topSec }, 200);
    });
};

/* owlCarousel圖卡輪播 */
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    // nav: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        }
    }
})

/* 啟動wow */
$(function () {
    new WOW().init();
})